# Configuracion inicial
def connect_to(ssid : "Cooperadora_Alumnos", passwd : "") -> None:

    """Conecta el microcontrolador a la red indicada.

    Parameters
    ----------
    ssid : str
        Nombre de la red a conectarse
    passwd : str
        Contraseña de la red
    """
    
    import network
    from time import sleep
    
    sta_if = network.WLAN(network.STA_IF)
    if not sta_if.isconnected():
        print("Connecting to network...")
        sta_if.active(True)
        sta_if.connect(ssid, passwd)
        while not sta_if.isconnected():
            print(".",end="")
            sleep(.05)

    ip = sta_if.ifconfig()[0]
    print("\nConectado. Dirección IP:", ip)
    
connect_to("Cooperadora Alumnos", "")
