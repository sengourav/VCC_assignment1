# Microservice Deployment Guide

This document provides step-by-step instructions for deploying the Node.js microservice on VM1 and testing it from VM2.

## Prerequisites

- Two VMs set up and configured according to the instructions in [vm-setup.md](vm-setup.md)
- Network configured according to the instructions in [network-config.md](network-config.md)
- Note the IP addresses of both VMs:
  - VM1 IP: (e.g., 192.168.56.101)
  - VM2 IP: (e.g., 192.168.56.102)

## Installing Node.js on VM1

1. Open a terminal in VM1
2. Update the package index:
   ```
   sudo apt update
   ```
3. Install Node.js and npm:
   ```
   sudo apt install -y nodejs npm
   ```
4. Verify the installation:
   ```
   node --version
   npm --version
   ```

## Deploying the Microservice on VM1

1. Create a new directory for the project:
   ```
   mkdir -p ~/microservice
   cd ~/microservice
   ```

2. Create a file named `package.json`:
   ```
   nano package.json
   ```
   
   Copy and paste the following content:
   ```json
   {
     "name": "vm-microservice",
     "version": "1.0.0",
     "description": "Simple microservice for VM deployment demonstration",
     "main": "server.js",
     "scripts": {
       "start": "node server.js",
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "author": "Gourav Sen (M24CSA011)",
     "license": "MIT",
     "dependencies": {
       "express": "^4.18.2"
     }
   }
   ```

3. Create a file named `server.js`:
   ```
   nano server.js
   ```
   
   Copy and paste the following content:
   ```javascript
   const express = require('express');
   const app = express();
   const PORT = 3001;

   app.get('/users', (req, res) => {
     res.send('Hello from microservice on VM1');
   });

   const HOST = '0.0.0.0';
   app.listen(PORT, HOST, () => {
     console.log(`User Service running on port ${PORT}`);
   });
   ```

4. Install dependencies:
   ```
   npm install
   ```

5. Start the microservice:
   ```
   node server.js
   ```
   
   You should see the message: `User Service running on port 3001`

## Testing the Microservice from VM2

1. Open a terminal in VM2
2. Use `curl` to send a request to the microservice on VM1:
   ```
   curl http://<VM1_IP>:3001/users
   ```
   
   Replace `<VM1_IP>` with the actual IP address of VM1 (e.g., 192.168.56.101)
   
   You should receive the response: `Hello from microservice on VM1`


<!--- 
## Troubleshooting

If you encounter issues with the microservice:

1. Check if the service is running on VM1:
   ```
   ps aux | grep node
   ```

2. Verify that the service is listening on port 3001:
   ```
   sudo netstat -tulpn | grep 3001
   ```

3. Check if there's a firewall blocking the connection:
   ```
   sudo ufw status
   ```
   
   If the firewall is active, allow traffic on port 3001:
   ```
   sudo ufw allow 3001/tcp
   ```

4. Make sure both VMs can communicate:
   ```
   ping <VM2_IP>
   ```
   (From VM1) 
   --->

## Next Steps

After successfully deploying and testing the microservice, you can explore extending it with additional features as suggested in the "Future Work" section of the README.
