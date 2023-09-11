 // Fetch data from the JSON file
 fetch('../scripts/python/good_first_issues.json')
 .then(response => response.json())
 .then(data => {
     // Loop through the issues and create a card for each
     const issuesContainer = document.getElementById('issuesContainer');
     data.forEach(issue => {
         const issueCard = document.createElement('div');
         issueCard.className = 'issue-card';
         issueCard.style.borderColor = getRandomColor();

         const title = document.createElement('h3');
         const link = document.createElement('a');
         link.href = `https://github.com/iiamabby/community-webpage/issues/${issue.issue_number}`;
         link.textContent = issue.title;
         title.appendChild(link);
         const issueNumber = document.createElement('p');
         issueNumber.textContent = `Issue Number: ${issue.issue_number}`;

         const createdBy = document.createElement('p');
         createdBy.innerHTML = `Created by: <a href="https://github.com/${issue.user}">${issue.user}</a> on ${issue.date_created}`;

         const hr = document.createElement('hr');

        const firstComment = document.createElement('p');
        const words = issue.first_comment.split(' ');
        // Select the first 50 words
        const limitedText = words.slice(0, 50).join(' ') + " ...";
        firstComment.textContent = limitedText;

         const viewButton = document.createElement('a');
         viewButton.className = 'btn btn-primary';
         viewButton.textContent = 'View Issue';
         viewButton.href = issue.link;

         issueCard.appendChild(title);
         issueCard.appendChild(issueNumber);
         issueCard.appendChild(createdBy);
         issueCard.appendChild(hr);
         issueCard.appendChild(firstComment);
         issueCard.appendChild(viewButton);

         issuesContainer.appendChild(issueCard);
     });
 })
 .catch(error => console.error('Error fetching data:', error));

// Function to generate random colors for issue cards
function getRandomColor() {
 const colors = ['#6f42c1', '#17a2b8', '#e83e8c', '#fd7e14'];
 return colors[Math.floor(Math.random() * colors.length)];
}