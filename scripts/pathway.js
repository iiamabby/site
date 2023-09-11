// Get the canvas element and its context
const canvas = document.getElementById('pathwayCanvas');
const ctx = canvas.getContext('2d');

// Data for main branch and sub-branches
const mainBranch = 'Cloud Computing';
const mainBranchItems = ['Cloud Basics', 'Cloud Deployment Models', 'Cloud Security', 'Cloud Services'];
const subBranches = [
  ['Linux','Cloud Computing Concepts', 'Introduction to Virtualization','Cloud Service Providers'],
  ['Public Cloud', 'Private Cloud', 'Hybrid Cloud'],
  ['Identity and Access Management', 'Data Security', 'Compliance'],
  ['Infrastructure as a Service (IaaS)', 'Platform as a Service (PaaS)', 'Software as a Service (SaaS)'],
];

// Function to resize the canvas to match the content size
function resizeCanvas() {
  const totalSubBranches = subBranches.reduce((total, subBranch) => total + subBranch.length, 0);
  const totalHeight = Math.max(150, mainBranchItems.length * 100 + totalSubBranches * 60);
  canvas.width = window.innerWidth;
  canvas.height = totalHeight / 2;
}

// Call resizeCanvas initially and whenever the window is resized
resizeCanvas();

// Function to draw a circle at the specified coordinates
function drawCircle(x, y, radius, color) {

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}

// Function to draw a line between two points
function drawLine(x1, y1, x2, y2) {
  ctx.globalCompositeOperation = 'destination-under';

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = '#888';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.closePath();
}

// Function to draw a branch with sub-branches
function drawBranch(x, y, title, subBranches) {
  // Draw the connector line between main branch dots
  if (x !== canvas.width / 2) {
    drawLine(x, y, canvas.width / 2, y);
  }

  // Draw sub-branches
  const totalSubBranches = subBranches.reduce((total, subBranch) => total + subBranch.length, 0);
  const branchStartY = y + 20 + totalSubBranches * 30 / 2;
  let subBranchY = branchStartY;
  for (let i = 0; i < subBranches.length; i++) {
    const subBranch = subBranches[i];
    for (let j = 0; j < subBranch.length; j++) {
      // Draw the connector line between main branch and sub-branch
      drawLine(x, y + 20, x, subBranchY - 10);

      subBranchY += 60;
    }
  }

  // Draw the main circle (blue dot) after drawing sub-branches
  drawCircle(x, y, 20, '#17a2b8');

  // Draw the main branch title above the blue dot
  ctx.fillStyle = '#000';
  ctx.font = '14px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(title, x, y - 30);

  // Draw sub-branches with circles after drawing main branch
  subBranchY = branchStartY;
  for (let i = 0; i < subBranches.length; i++) {
    const subBranch = subBranches[i];
    for (let j = 0; j < subBranch.length; j++) {
      // Draw the sub-circle (green dot) after drawing the line
      drawCircle(x, subBranchY, 10, '#6f42c1');

      // Draw the sub-branch title to the right of the sub-circle
      ctx.textAlign = 'start';
      ctx.fillText(subBranch[j], x + 25, subBranchY + 5);

      subBranchY += 60;
    }
  }
}

// Draw the main branches with
   drawBranch(canvas.width / 5, canvas.height / 2, mainBranchItems[0], [subBranches[0]]);
    drawBranch(canvas.width * 2 / 5, canvas.height / 2, mainBranchItems[1], [subBranches[1]]);
    drawBranch(canvas.width * 3 / 5, canvas.height / 2, mainBranchItems[2], [subBranches[2]]);
    drawBranch(canvas.width * 4 / 5, canvas.height / 2, mainBranchItems[3], [subBranches[3]]);