public class AuraDemo2OnAccount {
    @auraEnabled
    public static Account getAccount(String accountId)
    {
        Account acc = [SELECT Id, Name, Phone, Description FROM Account WHERE Id =: accountId ];
        return acc;
    }

}