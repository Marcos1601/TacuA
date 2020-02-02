import javax.swing.*;
import java.awt.event.*;

public class Boton extends JFrame implements ActionListener {
    JButton boton;
    JLabel texto;

    public Boton() {
        setLayout(null);
        boton=new JButton("SALIR");
        boton.setBounds(100,150,100,30);
        boton.addActionListener(this);
        add(boton);
        texto=new JLabel("Presione el botón para salir.");
        texto.setBounds(50,50,220,40);
        add(texto);
        }

        @Override
public void actionPerformed(ActionEvent e) {
if (e.getSource()==boton) {
setTitle("Saldrá en 3 segundos");
try{
Thread.sleep(3000);
System.exit(0);
} catch(Exception excep) {
System.exit(0);
}
}
}


public static void main(String[] ar) {
    Boton ventana=new Boton();
    ventana.setBounds(500,250,300,250);
    ventana.setVisible(true);
    ventana.setResizable(false);
    }


    $(document).ready(function(){ 
  
        $('#alternar-respuesta-ej5').toggle( 
      
            // Primer click
            function(e){ 
                $('#respuesta-ej5').slideDown();
                $(this).text('Ocultar respuesta');
                e.preventDefault();
            }, // Separamos las dos funciones con una coma
          
            // Segundo click
            function(e){ 
                $('#respuesta-ej5').slideUp();
                $(this).text('Ver respuesta');
                e.preventDefault();
            }
      
        );
      
    });