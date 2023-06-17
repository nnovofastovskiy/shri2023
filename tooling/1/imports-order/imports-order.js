'use strict'

const defaultGroups = [

];

function getImportGroups(importNodes) {
  const regs = {
    scopedAndAlias: /^@/,
    npm: /""/,
    relative: /^\.\.\//,
    relativeDot: /^\./
  }
  const importGroups = {
    scopedAndAlias: [],
    npm: [],
    relative: [],
    relativeDot: []
  };
  for (let i = 0; i < importNodes.length; i++) {
    const path = importNodes[i].source.value;
    if (regs.scopedAndAlias.test(path)) importGroups.scopedAndAlias.push(importNodes[i]);
    else if (regs.relative.test(path)) importGroups.relative.push(importNodes[i]);
    else if (regs.relativeDot.test(path)) importGroups.relativeDot.push(importNodes[i]);
    else importGroups.npm.push(importNodes[i]);
  }
  for (const group in importGroups) {
    importGroups[group] = importGroups[group].sort((nodeA, nodeB) => sortNodes(nodeA, nodeB))
  }
  return importGroups;
}

function sortNodes(nodeA, nodeB) {
  const pathA = nodeA.source.value;
  const pathB = nodeB.source.value;
  return pathA.localeCompare(pathB, undefined, { sensitivity: 'base' });
}

function getSortedImports(importGroups) {
  const allImports = [];
  for (const group in importGroups) {
    if (importGroups[group].length === 0) continue;
    allImports.push(...importGroups[group]);
  }
  return allImports;
}

function isRightOrder(node, importNodes, sortedNodes) {
  const originalOrder = importNodes.indexOf(node);
  const sortedOrder = sortedNodes.indexOf(node);
  return originalOrder === sortedOrder;
}

function getRightText(source, groups) {
  let result = '';
  for (const group in groups) {
    const groupNodes = groups[group];
    if (groupNodes.length === 0) continue;
    for (const node of groupNodes) {
      const comments = source.getCommentsBefore(node);
      if (comments.length > 0) {
        for (let comment of comments) {
          result += source.getText(comment) + '\n';
        }
      }
      result += source.getText(node) + '\n';
    }
    result += '\n';
  }
  return result.slice(0, -1);
}

function commentOfNode(node, source) {
  const comments = source.getCommentsBefore(node);
  if (comments.length > 0) return comments[0];
  return node;
}

function getSpacesBefore(importGroups) {
  const spaces = [];
  for (const group in importGroups) {
    if (importGroups[group].length > 0) {
      spaces.push(true);
      importGroups[group].forEach(_ => spaces.push(false));
    }
  }
  spaces.shift();
  return spaces;
}

function getCommentsToRemove(importNodes, source) {
  const allComments = [];
  importNodes.forEach(node => {
    const comments = source.getCommentsBefore(node);
    if (comments.length > 0) {
      allComments.push(...comments);
    }
  });
  return allComments;
}

function checkBetween(node, allNodes, spaces, source) {
  const text = source.getText();
  const token = commentOfNode(node, source);
  const i = allNodes.indexOf(node);
  if (i === 0) return token.range[0] === 0;
  const prevNode = allNodes[i - 1];
  const textBetween = text.substring(prevNode.range[1], token.range[0]);
  if (spaces[i]) {
    return (textBetween === '\n\n');
  } else {
    return (textBetween === '\n');
  }
}

function getMultilineRange(source, allImports) {
  const textArr = source.getText().split("\n");
  console.log(textArr);
  let startLine = 0;
  let endLine = 0;
  for (let i = 0; i < textArr.length - 1; i++) {
    if (textArr[i] == "" && textArr[i + 1] == "") {
      startLine = i;
      break;
    }
  }
  for (let i = textArr.length - 1; i > 0; i--) {
    if (textArr[i] == "" && textArr[i - 1] == "") {
      endLine = i;
      break;
    }
  }
  let start = 0;
  let end = 0;
  for (let i = 0; i < startLine; i++) {
    start += textArr[i].length + 1;
  }
  for (let i = 0; i < endLine; i++) {
    end += textArr[i].length + 1;
  }
  //console.log(start);
  //console.log(end);
  return [start, end];
  /*const allNodes = source.ast.body;
  console.log(allNodes);
  let nodeAfterImports = null;
  for (const node of allNodes) {
    if (node.type !== "ImportDeclaration") {
      nodeAfterImports = node;
      break;
    }
  }
  console.log(nodeAfterImports);*/
}

module.exports = {
  meta: {
    fixable: "code"
  },
  create: (context) => {
    const sourceCode = context.getSourceCode();
    //console.log(sourceCode.ast.body);
    const importNodes = sourceCode.ast.body.filter(node => node.type === "ImportDeclaration");
    const importGroups = getImportGroups(importNodes);
    const allSortedImports = getSortedImports(importGroups);
    const multilineRange = getMultilineRange(sourceCode, allSortedImports);
    console.log(multilineRange);
    return {
      ImportDeclaration: (node) => {
        if (!isRightOrder(node, importNodes, allSortedImports)) {
          context.report({
            node: node,
            message: "Not in right place",
            fix: (fixer) => {
              const rightText = getRightText(sourceCode, importGroups);
              const commentsToRemove = getCommentsToRemove(allSortedImports, sourceCode);
              return [
                ...commentsToRemove.map(comment => fixer.remove(comment)),
                ...allSortedImports.map(node => fixer.remove(node)),
                fixer.replaceTextRange([0, 0], rightText)
              ]
            }
          });
        }
        const spacesBefore = getSpacesBefore(importGroups);
        const isRightBetween = checkBetween(node, allSortedImports, spacesBefore, sourceCode)
        if (!isRightBetween) {
          context.report({
            node: node,
            message: "Wrong spaces between",
            fix: (fixer) => {
              const rightText = getRightText(sourceCode, importGroups);
              const commentsToRemove = getCommentsToRemove(allSortedImports, sourceCode);
              return [
                ...commentsToRemove.map(comment => fixer.removeRange(comment.range)),
                ...allSortedImports.map(node => fixer.removeRange(node.range)),
                fixer.replaceTextRange([0, 0], rightText),
                //fixer.removeRange([70, 73])
              ]
            }
          });
        }
        if (multilineRange[0] != multilineRange[1]) {
          context.report({
            loc: {
              start: {
                line: multilineRange[0] + 1,
                column: 0
              },
              end: {
                line: multilineRange[1],
                column: 0
              }
            },
            message: "Multispaces",
            fix: (fixer) => {
              return [
                fixer.replaceTextRange(multilineRange, ""),
              ]
            }
          });
        }
      },

    }
  }
};
