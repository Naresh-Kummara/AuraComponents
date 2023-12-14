public class AuraDemo3onAccountAndContacts {
    @auraEnabled
    public static List<Contact> getContactsApexMethod(Id accountId)
    {
       List<Contact> conList = [SELECT Id, Name, LastName FROM Contact WHERE AccountId =: accountId LIMIT 10]; 
        System.debug('contact of an account is-----------'+conList);
        return conList;
    }

}