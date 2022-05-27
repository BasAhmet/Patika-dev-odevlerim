
import java.util.Scanner;


public class Main {
    public static void main(String[] args) {
        int matematik, fizik, kimya, turkce, tarih, muzik;
        
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Matematik Notunuz : ");
        matematik = scanner.nextInt();
        
        System.out.print("Fizik Notunuz     : ");
        fizik = scanner.nextInt();
        
        System.out.print("Kimya Notunuz     : ");
        kimya = scanner.nextInt();

        System.out.print("Turkce Notunuz    : ");
        turkce = scanner.nextInt();

        System.out.print("Tarih Notunuz     : ");
        tarih = scanner.nextInt();

        System.out.print("Muzik Notunuz     : ");
        muzik = scanner.nextInt();
        
        int notToplami = matematik + fizik + kimya + turkce + tarih + muzik;
        double notOrtalamasi = notToplami / 6.0;
        
        System.out.println("Not ortalamaniz : " + notOrtalamasi);
        
        System.out.println(notOrtalamasi>=60 ? "Sinifi Gecti":"Sinif Tekrari");
        
    }
    
}
