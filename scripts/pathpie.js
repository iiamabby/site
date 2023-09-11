/* This is the data that we use to populate the sunburst chart */
const data = [
  { 
    mainBranch: 'Cloud Architect',
    subBranches: [
      { name: 'Gain Experience in IT', description: 'Start by working in IT-related roles, like helping manage computer systems, networks, or software. This experience will give you a strong foundation for becoming a Cloud Architect.', resources: ['Resource 1 for Linux', 'Resource 2 for Linux'] },
      { name: 'Cloud Computing Concepts', description: 'Learn about Cloud Computing Concepts, which are like the building blocks of cloud technology. Understand how cloud services work and why they are essential.', resources: ['Resource 1 for Cloud Computing Concepts', 'Resource 2 for Cloud Computing Concepts'] },
      { name: 'Cloud Platform Certifications', description: 'Obtain certifications from major cloud providers like AWS, Azure, or Google Cloud. Certifications showcase your expertise and make you stand out to employers.', resources: ['AWS Certified Solutions Architect', 'Microsoft Certified: Azure Solutions Architect Expert', 'Google Cloud Certified - Professional Cloud Architect'] },
      { name: 'Architecture Design Patterns', description: 'Study different cloud architecture design patterns such as microservices, serverless, and multi-tier applications. Understanding these patterns will help you design scalable and efficient cloud solutions.', resources: ['Resource 1 for Cloud Architecture Patterns', 'Resource 2 for Microservices Architecture', 'Resource 3 for Serverless Architecture'] }
    ],
    color: '#17a2b8',
    description: 'Cloud architects design and manage cloud infrastructures for organizations. They are responsible for developing cloud strategies, selecting appropriate cloud services, and ensuring the security and scalability of cloud systems.',
    resources: ['Resource 1 for Cloud Basics', 'Resource 2 for Cloud Basics', 'Resource 3 for Cloud Basics']
  },
  { 
    mainBranch: 'Cloud Engineer',
    subBranches: [
      { name: 'Linux', description: 'Learn about Linux, a powerful operating system used in many cloud environments. Understanding Linux will help you work with cloud servers and virtual machines.', resources: ['Resource 1 for Linux', 'Resource 2 for Linux'] },
      { name: 'Cloud Computing Concepts', description: 'Learn the foundations of cloud computing, like how data is stored in the cloud and how to use cloud services effectively.', resources: ['Resource 1 for Cloud Computing Concepts', 'Resource 2 for Cloud Computing Concepts'] },
      { name: 'Cloud Platform Hands-On Experience', description: 'Practice working with cloud platforms like AWS, Azure, or Google Cloud. Set up virtual machines, storage, and networking to gain practical skills.', resources: ['AWS Free Tier', 'Microsoft Azure Free Account', 'Google Cloud Free Tier'] },
      { name: 'Infrastructure as Code (IaC)', description: 'Learn about IaC tools like Terraform or AWS CloudFormation. Automating infrastructure setup as code helps with scalability and repeatability.', resources: ['Getting Started with Terraform', 'AWS CloudFormation Documentation', 'Infrastructure as Code: Concepts and Best Practices'] }
    ],
    color: '#17a2b8',
    description: 'Cloud engineers are involved in the implementation and maintenance of cloud solutions. They work on deploying applications, managing cloud resources, and optimizing performance.',
    resources: ['Resource 1 for Cloud Basics', 'Resource 2 for Cloud Basics', 'Resource 3 for Cloud Basics']
  },
  { 
    mainBranch: 'DevOps Engineer',
    subBranches: [
      { name: 'Linux', description: 'Begin by learning about Linux, an operating system commonly used in the cloud and for software development.', resources: ['Resource 1 for Linux', 'Resource 2 for Linux'] },
      { name: 'Cloud Computing Concepts', description: 'Understand the concepts behind cloud computing, such as how applications are hosted in the cloud and how they communicate with users.', resources: ['Resource 1 for Cloud Computing Concepts', 'Resource 2 for Cloud Computing Concepts'] },
      { name: 'CI/CD Pipelines', description: 'Explore Continuous Integration and Continuous Deployment (CI/CD) pipelines using tools like Jenkins, GitLab CI, or AWS CodePipeline. These pipelines automate software delivery, making it faster and more reliable.', resources: ['Getting Started with Jenkins', 'Introduction to GitLab CI/CD', 'AWS CodePipeline User Guide'] },
      { name: 'Containerization', description: 'Learn about container technologies like Docker and container orchestration with Kubernetes. Containers help in building and deploying applications consistently across different environments.', resources: ['Docker Documentation', 'Kubernetes Basics Tutorial', 'Docker for Beginners'] }
    ],
    color: '#17a2b8',
    description: 'DevOps engineers bridge the gap between development and operations teams, streamlining the development and deployment process. They often work with cloud platforms to automate workflows and manage infrastructure as code.',
    resources: ['Resource 1 for Cloud Basics', 'Resource 2 for Cloud Basics', 'Resource 3 for Cloud Basics']
  },
  { 
    mainBranch: 'Cloud Security Specialist',
    subBranches: [
      { name: 'Linux', description: 'Begin with learning about Linux, a common operating system used in cloud environments. Knowledge of Linux will be valuable for securing cloud systems.', resources: ['Resource 1 for Linux', 'Resource 2 for Linux'] },
      { name: 'Cloud Computing Concepts', description: 'Understand the fundamental concepts of cloud computing and how security practices apply to cloud environments.', resources: ['Resource 1 for Cloud Computing Concepts', 'Resource 2 for Cloud Computing Concepts'] },
      { name: 'Security Certifications', description: 'Obtain security certifications like CompTIA Security+ or Certified Cloud Security Professional (CCSP) to demonstrate your expertise in cloud security.', resources: ['CompTIA Security+ Certification', 'Certified Cloud Security Professional (CCSP)'] },
      { name: 'Security Best Practices in the Cloud', description: 'Learn about cloud security best practices, including identity and access management (IAM), encryption, network security, and compliance.', resources: ['Cloud Security Best Practices Guide', 'Cloud Security Fundamentals', 'AWS Security Documentation'] }
    ],
    color: '#17a2b8',
    description: 'As the name suggests, cloud security specialists focus on ensuring the security of cloud environments. They assess and mitigate potential security risks, implement security measures, and maintain compliance with industry standards.',
    resources: ['Resource 1 for Cloud Basics', 'Resource 2 for Cloud Basics', 'Resource 3 for Cloud Basics']
  },
  { 
    mainBranch: 'Cloud Solutions Architect',
    subBranches: [
      { name: 'Linux', description: 'Start by learning about Linux, a widely used operating system in cloud environments and web services.', resources: ['Resource 1 for Linux', 'Resource 2 for Linux'] },
      { name: 'Cloud Computing Concepts', description: 'Understand the core concepts of cloud computing and how different cloud services work together to create solutions.', resources: ['Resource 1 for Cloud Computing Concepts', 'Resource 2 for Cloud Computing Concepts'] },
      { name: 'Customer Requirements Analysis', description: 'Practice understanding customer needs and aligning them with cloud-based solutions. Learn how to translate business requirements into cloud architecture.', resources: ['Guide to Requirements Analysis', 'Customer Needs Assessment Techniques'] },
      { name: 'Cloud Cost Optimization', description: 'Learn techniques to optimize cloud costs for clients, such as using reserved instances, right-sizing resources, and leveraging cost management tools.', resources: ['AWS Cost Optimization Best Practices', 'Azure Cost Management and Billing', 'Google Cloud Cost Management'] }
    ],
    color: '#17a2b8',
    description: 'Cloud solutions architects design and implement end-to-end cloud-based solutions for clients. They collaborate with various stakeholders to understand business needs and create cloud-based systems that align with those requirements.',
    resources: ['Resource 1 for Cloud Basics', 'Resource 2 for Cloud Basics', 'Resource 3 for Cloud Basics']
  },
  
];



    // Convert the data to the required format for Plotly sunburst chart
    const labels = [];
    const parents = [];
    const values = [];
  
    data.forEach(mainBranchData => {
      labels.push(mainBranchData.mainBranch);
      parents.push("");
      values.push(mainBranchData.subBranches.length);
    
      mainBranchData.subBranches.forEach(subBranch => {
        labels.push(subBranch.name);
        parents.push(mainBranchData.mainBranch);
        values.push(1);
      });
    });

    // Create an array of colors to cycle through
    const colors = ['#6f42c1', '#17a2b8', '#e83e8c', '#fd7e14'];

    // Create a mapping of parent values to colors
    const parentToColor = {};
    parents.forEach((parent) => {
    if (!parentToColor.hasOwnProperty(parent)) {
        parentToColor[parent] = colors[Object.keys(parentToColor).length % colors.length];
    }
    });

    // Get the colors for each parent in the sunburst chart
    const colorsCycled = parents.map(parent => parentToColor[parent]);

    const plotlyData = [{
      type: "sunburst",
      labels: labels,
      parents: parents,
      values: values,
      outsidetextfont: { size: 20, color: "white" },
      leaf: { opacity: 0.5 },
      marker: { line: { width: 2 }, colors:colorsCycled,
      hoverinfo: 'label', // Show label on hover
    },
      textposition: 'inside',
      insidetextorientation: 'radial',
      color:'white'
    }];

    const layout = {
      margin: { l: 0, r: 0, b: 0, t: 0 },
      width: 500,
      height: 500
    };

    Plotly.newPlot('sunburstchart', plotlyData, layout);
 
    /* this section deals with making the chart interactive */
    document.getElementById('sunburstchart').on('plotly_click', event => {
      if (event.points && event.points.length > 0) {
        const point = event.points[0];
        const selectedLabel = point.label;
    
        // Find the data for the clicked item (main branch or submodule)
        const selectedItem = data.find(item => item.mainBranch === selectedLabel || item.subBranches.some(sub => sub.name === selectedLabel));
        let selectedSubmodule;
    
        // Update the information div with the information
        if (selectedItem) {
          if (selectedItem.mainBranch == selectedLabel) {
            document.getElementById('title').textContent = selectedItem.mainBranch;
            document.getElementById('description').textContent = selectedItem.description || '';
            const resourcesList = document.getElementById('resources');
            resourcesList.innerHTML = selectedItem.resources ? selectedItem.resources.map(resource => `<li>${resource}</li>`).join('') : '';
          } else {
            selectedSubmodule = selectedItem.subBranches.find(sub => sub.name === selectedLabel);
            if (selectedSubmodule) {
              document.getElementById('title').textContent = selectedSubmodule.name;
              document.getElementById('description').textContent = selectedSubmodule.description || '';
              const resourcesList = document.getElementById('resources');
              resourcesList.innerHTML = selectedSubmodule.resources ? selectedSubmodule.resources.map(resource => `<li>${resource}</li>`).join('') : '';
            }
          }
        }
      }
    });
    
    
