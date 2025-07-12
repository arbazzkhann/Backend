## DNS:
1. DNS Stands for **Domain Name Service**.
    example: User type a domain (e.g., www.example.com) into the browser.
2. **DNS Query**: The browser sends a DNS query to resolve the domain into an IP address.
3. **DNS Server**: Provides the correct **IP address for the domain**.
4. **Browser Connects**: The browser uses the IP to connect to the web server and loads the website.

![alt text](image.png)


## How actual DNS works?
1. **Root DNS**: Acts as the starting point for DNS resolution. It directs queries to the correct TLD server (e.g., **.com**, **.org**).
2. **TLD (Top-Level-Domain) DNS**: Handles queries for specific top-level domains (e.g., **.com**, **.net**) and directs them to the authoritative DNS server (e.g., **Verisign for .com, PIR for .org**).
3. **Authoritative DNS**: Contains the actual IP address of the domain and answers DNS queries with this information. (e.g., Cloudflare, Google DNS).

![alt text](image-1.png)


