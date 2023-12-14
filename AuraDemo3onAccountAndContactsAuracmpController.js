({
	getAccountRelatedContacts : function(component, event, helper)
    {
        var RecordId =component.get("v.recordId");
        console.log('record id is-------------------'+RecordId);
        
        var action =component.get("c.getContactsApexMethod");
        console.log('action id is-------------------'+action);
                    
             action.setParams({"accountId" : RecordId});
             action.setCallback(this, function(response)
                                {
                                    var state = response.getState();
                                    console.log('state  is-------------------'+state);
                                    if(state === "SUCCESS")
                                    {
                                        component.set("v.contacts",response.getReturnValue());
                                    }
                                    else {
                                        console.error('Error during server call: ' + state);
                                         }
                                 });
          $A.enqueueAction(action);
        
		
	}
})