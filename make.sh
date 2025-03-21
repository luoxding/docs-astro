nmcli connection modify Ding ipv4.addresses 192.168.10.3/24
nmcli connection modify Ding ipv4.gateway 192.168.10.1
nmcli connection modify Ding ipv4.dns "8.8.8.8 1.1.1.1"
nmcli connection modify Ding ipv4.method manual
nmcli connection down Ding && nmcli connection up Ding
ip a show Ding