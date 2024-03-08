// index.js

// SwiftCode - A cutting-edge coding platform designed to facilitate collaboration and accelerate development across a diverse range of projects.

// Coding platform functionality
class SwiftCode {
    constructor() {
        this.projects = [];
        this.collaborators = {};
    }

    // Method to create a new project
    createProject(projectName, description) {
        const project = {
            name: projectName,
            description: description
        };
        this.projects.push(project);
    }

    // Method to add collaborators to a project
    addCollaborators(projectName, collaborators) {
        this.collaborators[projectName] = collaborators;
    }

    // Method to display all projects and their collaborators
    displayProjects() {
        console.log("Projects:");
        this.projects.forEach(project => {
            console.log(`- ${project.name}: ${project.description}`);
            if (this.collaborators[project.name]) {
                console.log(`  Collaborators: ${this.collaborators[project.name].join(", ")}`);
            }
        });
    }
}

// Example usage:
const swiftCodeApp = new SwiftCode();

// Creating projects
swiftCodeApp.createProject("Web Development Tool", "Build a tool for web development tasks automation.");
swiftCodeApp.createProject("Data Analysis Platform", "Develop a platform for analyzing large datasets.");

// Adding collaborators to projects
swiftCodeApp.addCollaborators("Web Development Tool", ["developer1", "developer2"]);
swiftCodeApp.addCollaborators("Data Analysis Platform", ["analyst1", "analyst2"]);

// Displaying projects
swiftCodeApp.displayProjects();
