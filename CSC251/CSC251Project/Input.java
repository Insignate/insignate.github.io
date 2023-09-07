import java.util.Objects;
import java.util.Scanner;

/**
 * Keyboard input class to make life easier through the semester
 * gets user input checks and returns what the user typed on the keyboard
 */

public class Input {
    private Scanner scan = new Scanner(System.in);
    public Input(){}

    /**
     * Re-initialize the scanner class
     */
    public void reinitialyzeScanner(){
        this.scan = new Scanner(System.in);
    }

    /**
     * clear the keyboard buffer
     */
    public void clearScannerBuffer(){
        scan.nextLine();
    }

    /**
     * @param promptMessage show a message asking the user for information
     * @return the user input from the keyboard
     */
    public String scanString(String promptMessage){
        System.out.print(promptMessage);
        return scan.nextLine();
    }

    /**
     * gets user input displays a data request message and uses a upper and lower bound
     * @param promptMessage message asking for data
     * @param lowerBound lower limit
     * @param higherBound high limit
     * @return the user input as double
     */
    public double scanNumberBetween(String promptMessage, double lowerBound, double higherBound){
        double userInput = 0;
        do{
            try{
                System.out.print(promptMessage);
                userInput = Double.parseDouble(scan.nextLine());
                if(userInput < lowerBound || userInput > higherBound)
                    System.out.printf("Please enter a number between %f and %f!\n", lowerBound, higherBound);
            }catch (NumberFormatException e) {
                System.out.println("Invalid format entered, please enter a number!");
            }
        }while(userInput < lowerBound || userInput > higherBound);
        return userInput;
    }

    /**
     * gets user input displays a data request message and uses lower bound
     * @param promptMessage message asking for data
     * @param lowerBound lower limit
     * @return the user input as double
     */
    public double scanNumberHigherThan(String promptMessage, double lowerBound){
        double userInput = 0;
        do{
            try{
                System.out.print(promptMessage);
                userInput = Double.parseDouble(scan.nextLine());
                if(userInput < lowerBound)
                    System.out.printf("Please enter a number higher than %f!\n", lowerBound);
            }catch (NumberFormatException e) {
                System.out.println("Invalid format entered, please enter a number!");
            }
        }while(userInput < lowerBound);
        return userInput;
    }

    /**
     *
     * gets user input displays a data request message and uses high bound
     * @param promptMessage message asking for data
     * @param higherBound high limit
     * @return the user input as double
     */
    public double scanNumberLowerThan(String promptMessage, double higherBound){
        double userInput = 0;
        do{
            try{
                System.out.print(promptMessage);
                userInput = Integer.parseInt(scan.nextLine());
                if(userInput > higherBound)
                    System.out.printf("Please enter a number lower than %f!\n", higherBound);
            }catch (NumberFormatException e) {
                System.out.println("Invalid format entered, please enter a number!");
            }
        }while(userInput > higherBound);
        return userInput;
    }

    /**
     *
     * gets user input displays a data request message and uses lower bound
     * @param promptMessage message asking for data
     * @return the user input as double
     */
    public double scanNumber(String promptMessage){
        double userInput = 0;
        while(true){
            try{
                System.out.print(promptMessage);
                userInput = Integer.parseInt(scan.nextLine());
                return userInput;
            }catch (NumberFormatException e) {
                System.out.println("Invalid format entered, please enter a number!");
            }
        }

    }

    /**
     * gets user input displays a data request message and uses valid and invalid string
     * @param promptMessage message asking for data
     * @param valid valid string
     * @param invalid invalid string
     * @return if true or false
     */
    public boolean scanBoolean(String promptMessage, String valid, String invalid){
        String userInput = "";
        while(true){
            System.out.print(promptMessage);
            userInput = scan.nextLine();
            if(Objects.equals(valid, userInput))
                return true;
            else if(Objects.equals(userInput, invalid))
                return false ;
            System.out.println("Invalid answer");
        }
    }
}
