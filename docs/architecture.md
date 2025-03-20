# System Architecture

This document describes the architecture of the microservice deployment across multiple VMs.

## Overview

The system consists of two virtual machines connected through a Host-Only Network in VirtualBox:

1. **VM1**: Hosts the Node.js microservice
2. **VM2**: Acts as the client that sends requests to the service

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                      Host Machine (VirtualBox)                   │
│                                                                 │
│  ┌───────────────────┐        Host-Only Network        ┌───────────────────┐
│  │                   │           vboxnet0              │                   │
│  │       VM1         │◄────────────────────────────────►       VM2         │
│  │                   │        192.168.56.0/24          │                   │
│  │  Node.js Service  │                                 │  Client           │
│  │  Port: 3001       │                                 │  (curl)           │
│  │  IP: 192.168.56.101│                                 │  IP: 192.168.56.102│
│  └───────────────────┘                                 └───────────────────┘
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Components

### VM1 (Microservice Host)

- **Operating System**: Lubuntu (lightweight Ubuntu)
- **Resources**: 2GB RAM, 1 CPU, 10GB disk space
- **Software**:
  - Node.js runtime
  - Express framework
  - npm package manager
- **Network**:
  - Host-only adapter connected to vboxnet0
  - IP address: 192.168.56.101 (example)
- **Service**:
  - Simple Express.js application
  - Listens on port 3001
  - Binds to all network interfaces (0.0.0.0)
  - Provides a `/users` endpoint that returns a greeting message

### VM2 (Client)

- **Operating System**: Lubuntu (lightweight Ubuntu)
- **Resources**: 2GB RAM, 2 CPUs, 10GB disk space
- **Software**:
  - curl (for testing the service)
- **Network**:
  - Host-only adapter connected to vboxnet0
  - IP address: 192.168.56.102 (example)

### Host-Only Network

- **Network Name**: vboxnet0
- **IP Range**: 192.168.56.0/24
- **DHCP Server**:
  - Server Address: 192.168.56.100
  - Lower Address Bound: 192.168.56.101
  - Upper Address Bound: 192.168.56.254

## Communication Flow

1. VM1 starts the Node.js microservice, which listens on port 3001 on all network interfaces (0.0.0.0)
2. VM2 sends an HTTP GET request to VM1's IP address and port 3001 (e.g., http://192.168.56.101:3001/users)
3. The microservice on VM1 processes the request and returns a response: "Hello from microservice on VM1"
4. VM2 receives and displays the response

## Design Considerations

### Lightweight Operating System

Lubuntu was chosen instead of standard Ubuntu due to its lower resource requirements, making it suitable for systems with limited resources (8GB RAM total).

### Host-Only Network

A Host-Only Network was chosen for the following reasons:
- It allows the VMs to communicate with each other
- It provides isolation from external networks, focusing on the inter-VM communication
- It simplifies IP address management through DHCP

### Simple Microservice

The microservice was kept deliberately simple (a single endpoint returning a static message) to demonstrate the concept without requiring significant resources. This approach is appropriate given the hardware constraints mentioned in the assignment.
