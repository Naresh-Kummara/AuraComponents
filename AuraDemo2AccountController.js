({
	getAccountRecords : function(component, event, helper) {
        var acIdVar = component.get("v.accExternalId");
        var action = component.get("c.getAccount");
        
        action.setParams({"accountId":acIdVar});
        action.setCallback(this,function(resp)
                           {
                               var state = resp.getState();
                               if(state === "SUCCESS")
                               {
                                 var data = resp.getReturnValue();
                                   component.set("v.AccountRecord",data);
                               }
                           });
		$A.enqueueAction(action);
	}
})