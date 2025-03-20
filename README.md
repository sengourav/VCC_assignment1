# Microservice Deployment Across Multiple VMs

This project demonstrates how to deploy a simple Node.js microservice across multiple Virtual Machines (VMs) using VirtualBox. It includes step-by-step instructions for setting up VMs, configuring network settings, and deploying a basic Express-based microservice.

## Overview

The system consists of two VMs:
- **VM1**: Hosts the Node.js microservice that listens on port 3001
- **VM2**: Acts as a client that sends requests to the service

Both VMs are connected through a Host-Only Network in VirtualBox, allowing them to communicate with each other.

## Prerequisites

- VirtualBox (latest version)
- Lubuntu ISO (or another lightweight Linux distribution)
- Basic knowledge of Linux commands
- Minimum system requirements:
  - 8GB RAM
  - 50GB available storage
  - Dual-core processor

## Quick Start

1. **Set up VirtualBox VMs**
   - Follow the instructions in [deployment/vm-setup.md](deployment/vm-setup.md)

2. **Configure network settings**
   - Follow the instructions in [deployment/network-config.md](deployment/network-config.md)

3. **Deploy the microservice**
   - Follow the instructions in [deployment/service-deployment.md](deployment/service-deployment.md)

## Project Structure

- `src/`: Contains the source code for the microservice
- `deployment/`: Contains deployment instructions and configuration
- `docs/`: Contains architecture diagrams and output results

## Architecture

The architecture consists of two VMs connected through a Host-Only Network in VirtualBox. VM1 hosts the microservice and VM2 acts as the client.

![VM_architecture](https://github.com/user-attachments/assets/3bedba4c-5a8b-4e29-a6f3-155c8123f478)


For more details, see [docs/architecture.md](docs/architecture.md).

## Testing

To test the microservice:

1. Start the service on VM1
   ```
   node server.js
   ```

2. Send a request from VM2
   ```
   curl http://<VM1_IP>:3001/users
   ```

You should receive the response: "Hello from microservice on VM1"

## Future Work

- Implement secure communication with HTTPS
- Add service discovery mechanism to find services without hardcoding IPs
- Extend the service to handle dynamic user data
- Consider moving to cloud platforms for better scalability


## Author

Gourav Sen (M24CSA011)
