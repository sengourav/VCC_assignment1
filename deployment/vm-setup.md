# VirtualBox VM Setup Guide

This document provides step-by-step instructions for setting up multiple VMs in VirtualBox for microservice deployment.

## Prerequisites

- VirtualBox installed on your machine
- Lubuntu ISO file downloaded from [https://lubuntu.me/downloads/](https://lubuntu.me/downloads/)
- At least 8GB RAM and 50GB available storage

## Installing VirtualBox

1. Download the latest version of VirtualBox from the official website [https://www.virtualbox.org/](https://www.virtualbox.org/)
2. Run the installer and follow the setup wizard
3. Ensure network adapters and extensions are selected during installation

## Creating VM1 (Microservice Host)

1. Open VirtualBox and click on "New"
2. Enter the VM name (e.g., "VM1") and select "Linux" as the OS type and "Ubuntu (64-bit)" as the version
3. Allocate 2GB of RAM (2048 MB)
4. Create a virtual hard disk with at least 10GB of space
5. Complete the setup by clicking "Finish"
6. Select the newly created VM and click "Settings"
7. Go to "Storage", click on the empty optical drive, and select the Lubuntu ISO file
8. Start the VM and follow the on-screen instructions to install Lubuntu
9. During installation, select the following options:
   - Minimal installation
   - Erase disk and install Lubuntu
   - Choose your timezone
   - Set your username and password

## Creating VM2 (Client)

1. Repeat the steps for creating VM1, but name this VM "VM2"
2. Allocate 2GB of RAM (2048 MB) and at least 10GB of disk space
3. Install Lubuntu following the same steps as for VM1

## Post-Installation Setup

For both VMs, after the installation is complete:

1. Update the system packages:
   ```
   sudo apt update
   sudo apt upgrade -y
   ```

2. Install essential tools:
   ```
   sudo apt install -y curl net-tools openssh-server
   ```

3. Enable SSH service:
   ```
   sudo systemctl enable ssh
   sudo systemctl start ssh
   ```

4. Set up host names (optional):
   - For VM1:
     ```
     sudo hostnamectl set-hostname vm1
     ```
   - For VM2:
     ```
     sudo hostnamectl set-hostname vm2
     ```

<!--- 5. Reboot the VMs:
   ```
   sudo reboot
   ``` 
   --->

## Next Steps

After setting up both VMs, proceed to [network-config.md](network-config.md) to configure the network settings for communication between the VMs.
