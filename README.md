# Sigil: Companion Application for the Sigil LARP

Welcome to the official repository of Sigil, a state-of-the-art companion application designed specifically for the Sigil Live Action Role Playing (LARP) game. Built using the Ionic Framework with Vue3 and Vuex, Sigil aims to enhance your LARP experience by providing seamless integration and utility both in and out of game sessions. Below, you'll find instructions on how to get started with the project, along with links to additional resources and documentation.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Continuous Deployment](#continuous-deployment)
- [Lambda Functions](#lambda-functions)
- [Docker](#docker)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following tools installed on your system:
- Node.js and npm
- Ionic CLI
- Docker (for building and running Docker images)
- Vue CLI (optional)

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/biscuitWizard/Sigil.git
    cd Sigil
    ```

2. Install the project dependencies:

    ```bash
    npm install
    ```

3. Serve the application locally:

    ```bash
    ionic serve
    ```

Navigate to `http://localhost:8100` to view the application.

## Project Structure

Sigil's codebase is organized for clarity and scalability. For a detailed explanation of the project structure and conventions used, visit the [Project Structure Wiki](https://github.com/biscuitWizard/Sigil/wiki/Project-Structure).

## Continuous Deployment

Sigil uses modern CI/CD practices for automated testing and deployment. For more details on our continuous deployment strategy and how to set it up for your forks, refer to the [Continuous Deployment Wiki](https://github.com/biscuitWizard/Sigil/wiki/Continuous-Deployment).

## Lambda Functions

The `/lambda` folder contains various AWS Lambda functions used by Sigil for backend processing and integration tasks. Each function is documented with its purpose, inputs, and outputs. For more information, visit the [Lambda Functions Wiki](https://github.com/biscuitWizard/Sigil/wiki/Lambda-Functions).

## Docker

Sigil can be built and run as a Docker container for ease of deployment and consistency across environments.

To build the Docker image:

```bash
docker build -t sigil:latest .
```

To run the Docker container:
```bash
docker run -d -p 8100:8100 sigil:latest
```

For detailed instructions on setting up and managing Docker for Sigil, including optimizations and deployment, see the Docker Wiki.

## Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make to the Sigil project are greatly appreciated. Check out our Contributing Guide for more information on how to get started.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.
