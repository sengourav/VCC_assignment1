# Network Configuration Guide

This document provides instructions for configuring network settings to enable communication between multiple VMs in VirtualBox.


## Configuring VM1 Network Settings

1. Shut down VM1 if it's running
2. Select VM1 in VirtualBox Manager and click "Settings"
3. Go to "Network"
4. For "Adapter 1":
   - Check "Enable Network Adapter"
   - Set "Attached to:" to "Host-only Adapter"
   - Select the host-only network you created
5. Click "OK" to save the settings
6. Start VM1

## Configuring VM2 Network Settings

1. Repeat the same steps as for VM1 to configure VM2's network settings
2. Ensure both VMs are using the same host-only network

## Verifying Network Configuration

1. Start both VMs
2. Open a terminal in each VM
3. Check the IP addresses assigned to each VM:
   ```
   ip a
   ```
   Look for an interface (likely "enp0s3") with an IP address in the 192.168.56.x range

4. Note down the IP addresses of both VMs
   - VM1 IP: (e.g., 192.168.56.101)
   - VM2 IP: (e.g., 192.168.56.102)

5. Test connectivity between VMs:
   - From VM1, ping VM2:
     ```
     ping <VM2_IP>
     ```
   - From VM2, ping VM1:
     ```
     ping <VM1_IP>
     ```

If both VMs can ping each other, the network is configured correctly.

## Troubleshooting

If the VMs cannot ping each other:

1. Check if the network interface is up in both VMs:
   ```
   sudo ip link set enp0s3 up
   ```

2. Verify that both VMs have IP addresses in the same subnet:
   ```
   ip a
   ```


## Next Steps

After configuring the network, proceed to [service-deployment.md](service-deployment.md) to deploy the microservice.
