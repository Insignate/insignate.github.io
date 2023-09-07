/**
 * Policyholder's information and prices
 */

public class Policy {
    private int number = 0;
    private String providerName = "";
    private String firstName = "";
    private String lastName = "";
    private int age = 0;
    private boolean smoker = false;
    private double height = 0.0;
    private double weight = 0.0;

    private final int BMI_CONST = 703;
    private final double INSURANCE_FEE = 600;
    private final double SMOKER_FEE = 100;
    private final double ELDERLY_FEE = 50;
    private final int ELDERLY_OVER_AGE = 50;
    private final int BMI_OVER = 35;
    private final double BMI_OVER_MULTIPLY_PRICE = 20;
    private final int BMI_OVER_MINUS = 35;
    /**
     * Initializes the Policy class with default values as empty string, false and 0
     */
    public Policy(){
        this.number = 0;
        this.providerName = "";
        this.firstName = "";
        this.lastName = "";
        this.age = 0;
        this.smoker = false;
        this.height = 0.0;
        this.weight = 0.0;
    }

    /**
     * Initializes the policy with given values below
     * @param number customer's policy number
     * @param providerName the name of the provider
     * @param firstName customer's first name
     * @param lastName customer's last name
     * @param age customer's age
     * @param smoker if the customer smoke or not
     * @param height the weight of the customer
     * @param weight the weight of the customer
     */
    public Policy(int number,
                  String providerName,
                  String firstName,
                  String lastName,
                  int age,
                  boolean smoker,
                  double height,
                  double weight){
        this.number = number;
        this.providerName = providerName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.smoker = smoker;
        this.height = height;
        this.weight = weight;
    }

    /**
     * gets the policy number
     * @return policy number
     */
    public int getNumber() {
        return number;
    }

    /**
     * sets the policy number
     * @param number set
     */
    public void setNumber(int number) {
        this.number = number;
    }

    /**
     * get provider name
     * @return provider name
     */
    public String getProviderName() {
        return providerName;
    }

    /**
     * set provider name
     * @param providerName provider name
     */
    public void setProviderName(String providerName) {
        this.providerName = providerName;
    }

    /**
     * get customer's first name
     * @return first name
     */
    public String getFirstName() {
        return firstName;
    }

    /**
     * sets the customer's first name
     * @param firstName first name
     */
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    /**
     * gets customer's last name
     * @return last name
     */
    public String getLastName() {
        return lastName;
    }

    /**
     * sets customer last name
     * @param lastName last name
     */
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    /**
     * get customer's age
     * @return age
     */
    public int getAge() {
        return age;
    }

    /**
     * sets customer's age
     * @param age age
     */
    public void setAge(int age) {
        this.age = age;
    }

    /**
     * gets if customer is smoker or not
     * @return smoker as boolean
     */
    public boolean isSmoker() {
        return smoker;
    }

    /**
     * sets if customer is smoker or not
     * @param smoker smoker as true or false
     */
    public void setSmoker(boolean smoker) {
        this.smoker = smoker;
    }

    /**
     * gets custome's height
     * @return height
     */
    public double getHeight() {
        return height;
    }

    /**
     * sets customer's height
     * @param height height
     */
    public void setHeight(double height) {
        this.height = height;
    }

    /**
     * gets customer's weight
     * @return weight
     */
    public double getWeight() {
        return weight;
    }

    /**
     * sets customer's weight
     * @param weight weight
     */
    public void setWeight(double weight) {
        this.weight = weight;
    }


    /**
     * Calculates and returns the BMI of the policy holder
     * @return the BMI
     */
    public double calculateBmi(){
        return this.weight * this.BMI_CONST / this.height;
    }

    /**
     * calculate the total policy cost for the specific person
     * @return policy cost
     */
    public double policyInsurancePrice(){
        double userBmi = calculateBmi();
        double policyCost = INSURANCE_FEE;
        if (this.age > ELDERLY_OVER_AGE) policyCost += ELDERLY_FEE;
        if (this.smoker) policyCost += this.SMOKER_FEE;
        if (userBmi > BMI_OVER) policyCost += (userBmi - BMI_OVER_MINUS) + BMI_OVER_MULTIPLY_PRICE;
        return policyCost;

    }

    /**
     * display results of specific user's policy
     * @return policy information and costs
     */
    @Override
    public String toString() {
        return String.format("Policy Number: %d" +
            "\nProvider Name: %s" +
            "\nPolicyholder's First Name: %s" +
            "\nPolicyholder's Last Name: %s" +
            "\nPolicyholder's Age: %d" +
            "\nPolicyholder's Smoking Status: %s" +
            "\nPolicyholder's Weight: %.2f" +
            "\nPolicyholder's Height: %.2f" +
            "\nPolicyholder's BMI: %.2f" +
            "\nPolicy Price: %.2f" ,
            this.number, this.providerName, this.firstName, this.lastName, this.age, (this.smoker ? "smoker" : "non-smoker"),
            this.weight, this.height, this.calculateBmi(), policyInsurancePrice()
        );


    }
}
