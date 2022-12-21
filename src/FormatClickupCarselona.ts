import axios from 'axios'

export class FormatClickupCarselona {
    static  formatSubscriptionForWelcomeCall(inputdata:any) {
        
        const custom_fields =[];
        const input_custom_field_array = Object.keys(inputdata.custom);
        const custom_field_len = input_custom_field_array.length;
        for( var i = 0; i < custom_field_len; i++){
            var field:any ={
                'id': inputdata.custom[input_custom_field_array[i]],
                'value':input_custom_field_array[i]
            }
            custom_fields.push(field);
        }
        const data: any = {
          "name": inputdata.name,
          "description": inputdata.description,
          "check_required_custom_fields": true,
          "assignees": [
            inputdata.assignees
           ],
          "tags": [
            inputdata.tag
           ],
           "priority": inputdata.priority,
           "custom_fields": custom_fields
        };
        
       
       return data;
    }

    static  formatDataForParentTask(data: any, deletedataarray: any) {
        
        for( let i = 0; i < deletedataarray.length; i++){
            delete data.custom_fields[deletedataarray[i]];
        }
        
    }

    static  formatThirdPartLeadForBinstackList(customer: any) {
       
        const custom_fields =[];
        const input_custom_field_array = Object.keys(customer.custom);
        const custom_field_len = input_custom_field_array.length;
        for( var i = 0; i < custom_field_len; i++){
            var field:any ={
                'id'   : customer.custom[input_custom_field_array[i]],
                'value':input_custom_field_array[i]
            }
            custom_fields.push(field);
        }
       
        const data: any = {
            name: customer.firstname + ' ' + customer.lastname ,
            description: "test description",
            "parent": null,
            "check_required_custom_fields": true,
            "custom_fields": custom_fields
        }    
        
        return data

    }
}