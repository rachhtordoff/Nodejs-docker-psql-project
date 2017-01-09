#**Welcome to OPTIself**
## Initial Set up and run

1. Clone the repository using `git clone`
2. Run the docker containers and install requirements using `vagrant up`.

###Modifying your hosts file in order to run the proxy incase of failure.
1. In a terminal, outside of the vm, past sudo nano /etc/hosts and run
2. At the very bottom of your hosts file past the following : `192.168.50.100  Optiself.co.uk postgresapi.local`
3. Carry out the `vagrant up` command for a second time.
