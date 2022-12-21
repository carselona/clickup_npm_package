import axios from 'axios'

export class TasksClickupCarselona {

    static async createTask(list_id:any, data: any, event_name: any, apikey:any){
        

        let response = await axios.post(`https://api.clickup.com/api/v2/list/${list_id}/task`,
            data,
            {
                headers: {
                    'Authorization': apikey
                }
            }).then(async (response) => {
                
                return response.data;

            }).catch(async (error) => {
                if (error.response) {
                    
                }
                
                return error.response;
            });

        return response
    }
    
    static async getTasks(list_id: any, apikey:any) {
        let response = await axios.get(`https://api.clickup.com/api/v2/list/${list_id}/task?subtasks=true`,
            {
                headers: {
                    'Authorization': apikey
                }
            });


        if (response.status == 200) {
            return response.data.tasks
        } else {
            return false
        }
    }

    static async createParentTask(list_id: any, data: any, apikey: any) {
        // let apiReport: any = {
        //     external_api_name: 'clickup',
        //     event_name: 'create_parent_task',
        //     trigger_datetime: new Date().toISOString(),
        //     request_data: JSON.stringify({ list_id, data }),
        // }
        let response = await axios.post(`https://api.clickup.com/api/v2/list/${list_id}/task`,
            data,
            {
                headers: {
                    'Authorization': apikey
                }
            }).then(async (response) => {
                //apiReport['status_code'] = response.status
                if (response.status == 200) {
                    //apiReport['response_data'] = JSON.stringify(response.data)
                    if (response.data) {
                        

                        return response.data.id;
                    } else {
                        

                        return false;
                    }
                } else {
                    //apiReport['response_data'] = JSON.stringify(response.data)

                    

                    return false
                }

            }).catch(async (error) => {
                if (error.response) {
                    // apiReport['status_code'] = error.response.status ?? 400
                    // apiReport['response_data'] = JSON.stringify(error.response.data)
                }
                return false
            });

        return response

    }

    static async createTaskR(list_id: any, data: any, event_name:any, apikey: any) {
        
        let response = await axios.post(`https://api.clickup.com/api/v2/list/${list_id}/task`,
            data,
            {
                headers: {
                    'Authorization': apikey
                }
            }).then(async (response) => {
                

                if (response.status == 200) {
                    if (response.data) {

                        return response.data;
                    } else {

                        return null;
                    }
                } else {


                    return false
                }

            }).catch(async (error) => {
                

                if (error.response) {
                    
                }
                return false
            });


        return response
    }

    static async updateTask(task_id: any, data: any, event_name: any, apikey: any) {
        // let apiReport = {
        //     external_api_name: 'clickup',
        //     event_name: event_name,
        //     trigger_datetime: new Date().toISOString(),
        //     request_data: JSON.stringify(data),
        // }
        let response = await axios.put(`https://api.clickup.com/api/v2/task/${task_id}`,
            data,
            {
                headers: {
                    'Authorization': apikey
                }
            }).then(async (response) => {
                console.log('----------------updateTask------------------');
                console.log(response);
                console.log('----------------end updateTask-----------------');
                //apiReport['status_code'] = response.status
                if (response.status == 200) {
                    //apiReport['response_data'] = JSON.stringify(response.data)
                    if (response.data) {

                        return response.data;
                    } else {

                        return false;
                    }
                } else {
                    //apiReport['response_data'] = JSON.stringify(response.data)


                    return false
                }

            }).catch(async (error) => {
                if (error.response) {
                    // apiReport['status_code'] = error.response.status ?? 400
                    // apiReport['response_data'] = JSON.stringify(error.response.data)
                }
                return false
            });


        return response

    }

    static async addTagToTask(task_id: any, tagName: any, apikey: any) {
        var data = {}
        // let apiReport = {
        //     external_api_name: 'clickup',
        //     event_name: 'add_tag_from_task',
        //     trigger_datetime: new Date().toISOString(),
        //     request_data: JSON.stringify({ task_id: task_id, tagName: tagName }),
        // }
        let response = await axios.post(`https://api.clickup.com/api/v2/task/${task_id}/tag/${tagName}`,
            data,
            {
                headers: {
                    'Authorization': apikey
                }
            }).then(async (response) => {
                //apiReport['status_code'] = response.status
                console.log('----------------addTagToTask------------------');
                console.log(response);
                console.log('----------------end addTagToTask-----------------');
                if (response.status == 200) {
                    //apiReport['response_data'] = JSON.stringify(response.data)
                    if (response.data) {

                        return response.data;
                    } else {

                        return false;
                    }
                } else {
                    //apiReport['response_data'] = JSON.stringify(response.data)


                    return false
                }

            }).catch(async (error) => {
                if (error.response) {
                    // apiReport['status_code'] = error.response.status ?? 400
                    // apiReport['response_data'] = JSON.stringify(error.response.data)
                }
                return false
            });


        return response
    }

    static async removeTagFromTask(task_id: any, tagName: any, apikey: any) {
        var data = {}
        // let apiReport = {
        //     external_api_name: 'clickup',
        //     event_name: 'remove_tag_from_task',
        //     trigger_datetime: new Date().toISOString(),
        //     request_data: JSON.stringify({ task_id: task_id, tagName: tagName }),
        // }
        let response = await axios.delete(`https://api.clickup.com/api/v2/task/${task_id}/tag/${tagName}`,
            {
                headers: {
                    'Authorization': apikey
                }
            }).then(async (response) => {
                console.log('----------------removeTagFromTask------------------');
                console.log(response);
                console.log('----------------end removeTagFromTask-----------------');

                //apiReport['status_code'] = response.status
                if (response.status == 200) {
                    //apiReport['response_data'] = JSON.stringify(response.data)
                    if (response.data) {

                        return response.data;
                    } else {

                        return false;
                    }
                } else {
                    //apiReport['response_data'] = JSON.stringify(response.data)


                    return false
                }

            }).catch(async (error) => {
                if (error.response) {
                    // apiReport['status_code'] = error.response.status ?? 400
                    // apiReport['response_data'] = JSON.stringify(error.response.data)
                }
                return false
            });

        return response
    }
    
    static async deleteTask(task_id: any, apikey: any) {
        let response = await axios.delete(`https://api.clickup.com/api/v2/task/${task_id}`,
            {
                headers: {
                    'Authorization': apikey
                }
            });


        if (response.status == 200) {
            return response.data
        } else {
            return false
        }
    }

    static async findCustomerTaskId(list_id: any, mobile: any, apikey: any) {

        let custom_fields = JSON.stringify([{ "field_id": "93fd6279-2e4c-4603-a77e-ac16f3c94788", "operator": "=", "value": mobile }])
        // let apiReport = {
        //     external_api_name: 'clickup',
        //     event_name: 'remove_tag_from_task',
        //     trigger_datetime: new Date().toISOString(),
        //     request_data: custom_fields,
        // }

        let response = await axios.get(`https://api.clickup.com/api/v2/list/${list_id}/task?custom_fields=${custom_fields}`,
            {
                headers: {
                    'Authorization': apikey
                }
            }).then(async (response) => {
                //apiReport['status_code'] = response.status
                if (response.status == 200) {
                    //apiReport['response_data'] = JSON.stringify(response.data)
                    if (response.data.tasks.length) {

                        return response.data.tasks[0].id;
                    } else {

                        return false;
                    }
                } else {
                    //apiReport['response_data'] = JSON.stringify(response.data)


                    return false
                }

            }).catch(async (error) => {
                if (error.response) {
                    // apiReport['status_code'] = error.response.status ?? 400
                    // apiReport['response_data'] = JSON.stringify(error.response.data)
                }
                return false
            });

        return response;
    }

    static async findCustomerTask(list_id: any, mobile: any, apikey: any) {

        let custom_fields = JSON.stringify([{ "field_id": "93fd6279-2e4c-4603-a77e-ac16f3c94788", "operator": "=", "value": mobile }])
        let response = await axios.get(`https://api.clickup.com/api/v2/list/${list_id}/task?custom_fields=${custom_fields}`,
            {
                headers: {
                    'Authorization': apikey
                }
            });

        if (response.status == 200) {
            if (response.data.tasks.length) {

                return response.data.tasks[0];
            } else {

                return null;
            }

        } else {

            return null
        }
    }
   
    static async getLists(folder_id: any, apikey:any ) {
        let response = await axios.get(`https://api.clickup.com/api/v2/folder/${folder_id}/list`,
            {
                headers: {
                    'Authorization': apikey
                }
            });


        if (response.status == 200) {
            return response.data
        } else {
            return false
        }
    }

    static async getCustomFields(list_id: any, apikey: any) {
        let response = await axios.get(`https://api.clickup.com/api/v2/list/${list_id}/field`,
            {
                headers: {
                    'Authorization': apikey
                }
            });

        console.log(response);

        if (response.status == 200) {
            return response.data
        } else {
            return false
        }
    }

    static async getListById(list_id: any, apikey: any) {
        let response = await axios.get(`https://api.clickup.com/api/v2/list/${list_id}`,
            {
                headers: {
                    'Authorization': apikey
                }
            });


        if (response.status == 200) {
            return response.data
        } else {
            return false
        }
    }

    

    

    

    

    

    static async getAllFields(list_id: any, apikey: any) {
        let response = await axios.get(`https://api.clickup.com/api/v2/list/${list_id}/field`,
            {
                headers: {
                    'Authorization': apikey
                }
            });


        if (response.status == 200) {
            return response.data
        } else {
            return false
        }
    }

    

    

    static async findCustomerVehicle(list_id: any, vehcileNo: any , field_id: any, apikey: any) {
        let custom_fields = JSON.stringify([{ "field_id": field_id, "operator": "=", "value": vehcileNo }])

       
            // let apiReport = {
            //     external_api_name: 'clickup',
            //     event_name: 'find_customer_vehicle',
            //     trigger_datetime: new Date().toISOString(),
            //     request_data: custom_fields,
            // }

            let response = await axios.get(`https://api.clickup.com/api/v2/list/${list_id}/task?custom_fields=${custom_fields}&subtasks=true`,
                {
                    headers: {
                        'Authorization': apikey
                    }
                }).then(async (response) => {
                    //apiReport['status_code'] = response.status
                    if (response.status == 200) {
                        //apiReport['response_data'] = JSON.stringify(response.data)
                        if (response.data.tasks.length) {

                            return response.data.tasks[0].id;
                        } else {

                            return null;
                        }
                    } else {
                        //apiReport['response_data'] = JSON.stringify(response.data)


                        return null
                    }

                }).catch(async (error) => {
                    if (error.response) {
                        // apiReport['status_code'] = error.response.status ?? 400
                        //apiReport['response_data'] = JSON.stringify(error.response.data)
                    }
                });

            return response


        
    }

    static async findSubTaskCustomerVehicle(list_id: any, vehcileNo: any, apikey: any, field_id: any) {

        let custom_fields = JSON.stringify([{ "field_id": field_id, "operator": "=", "value": vehcileNo }])
        let response = await axios.get(`https://api.clickup.com/api/v2/list/${list_id}/task?custom_fields=${custom_fields}&subtasks=true`,
            {
                headers: {
                    'Authorization': apikey
                }
            });

        if (response.status == 200) {
            if (response.data.tasks.length) {

                return response.data.tasks[0];
            } else {

                return null;
            }

        } else {

            return null
        }
    }

    static async getSubtasks(taskId: any, apikey: any) {

        // let custom_fields = JSON.stringify([{"field_id":"93fd6279-2e4c-4603-a77e-ac16f3c94788","operator":"=","value":mobile}])
        let response = await axios.get(`https://api.clickup.com/api/v2/task/${taskId}?include_subtasks=true`,
            {
                headers: {
                    'Authorization': apikey
                }
            });

        if (response.status == 200) {
            if (response.data) {


                return response.data;
            } else {

                return null;
            }

        } else {

            return null
        }
    }

    static async findCustomerPhone(list_id: any, phone: any, apikey: any) { //TODO: 
        try {
            let custom_fields = JSON.stringify([{ "field_id": "93fd6279-2e4c-4603-a77e-ac16f3c94788", "operator": "=", "value": phone }])
            let response = await axios.get(`https://api.clickup.com/api/v2/list/${list_id}/task?custom_fields=${custom_fields}&subtasks=true`,
                {
                    headers: {
                        'Authorization': apikey
                    }
                });

            if (response.status == 200) {
                if (response.data.tasks.length) {

                    return response.data.tasks[0].id;
                } else {

                    return null;
                }

            } else {

                return null
            }
        } catch (e) {
            return null

        }
    }

    static async updateInAllList(subscription: any , data: any , socityListId: any, apikey: any) {
        //find in society list
        if (socityListId != 0) {
            let societyListTaskFound: any = await this.findCustomerPhone(socityListId, subscription.phone, apikey);
            if (societyListTaskFound) {
                await this.updateTask(societyListTaskFound, data, 'update_in_all_list', apikey )
            }
        }

        //find in binstack
        var binstackTaskFound: any = await this.findCustomerPhone(49350236, subscription.phone, apikey);
        if (binstackTaskFound) {
            await this.updateTask(binstackTaskFound, data, 'update_in_all_list', apikey)
        }

        //find in Visitors list
        var visitorListTaskFound: any = await this.findCustomerPhone(175427694, subscription.phone, apikey);
        if (visitorListTaskFound) {
            await this.updateTask(visitorListTaskFound, data, 'update_in_all_list', apikey)
        }

        //werbsite lead
        var websiteListTaskFound: any = await this.findCustomerPhone(169400544, subscription.phone, apikey);
        if (websiteListTaskFound) {
            await this.updateTask(websiteListTaskFound, data, 'update_in_all_list', apikey)
        }

        //cleaner lead
        var cleanerListTaskFound: any = await this.findCustomerPhone(175429298, subscription.phone, apikey);
        if (cleanerListTaskFound) {
            await this.updateTask(cleanerListTaskFound, data, 'update_in_all_list', apikey)
        }

        return true
    }

    static async addChecklistToNewCleanerLeadTask(taskId: any, apikey: any) {
        let checklist = {
            "name": "CLEANER INTERVIEW QUESTIONS",
        }

        try {
            let response = await axios.post(`https://api.clickup.com/api/v2/task/${taskId}/checklist`,
                checklist,
                {
                    headers: {
                        'Authorization': apikey
                    }
                });
            // if (response.status == 200) {
            //     // let items = [
            //     //     {
            //     //         "name": "HAS A BIKE / SCOOTER",
            //     //         "orderindex": 0,
            //     //         "assignee": null,
            //     //     },
            //     //     {
            //     //         "name": "WILLING TO WORK FROM 6AM TO 9AM",
            //     //         "orderindex": 1,
            //     //         "assignee": null,
            //     //     },
            //     //     {
            //     //         "name": "AGREES TO WEEKLY PAYOUT",
            //     //         "orderindex": 2,
            //     //         "assignee": null,
            //     //     }, {
            //     //         "id": "e03c11a2-02e1-4eb2-a1dc-82ac0cc88152",
            //     //         "name": "WILL SUBMIT DOCUMENTS",
            //     //         "orderindex": 3,
            //     //     }
            //     // ]

            //     // for (let i = 0; i < items.length; i++) {
            //     //     let item = items[i];
            //     //     await this.addItemsToChecklist(item, response.data.checklist.id)
            //     // }
            // }
            return response.status;
        } catch (err) {

            return err;
        }
    }

    static async addItemsToChecklist(data: any , checklistId: any, apikey: any) {
        let response = await axios.post(`https://api.clickup.com/api/v2/checklist/${checklistId}/checklist_item`,
            data,
            {
                headers: {
                    'Authorization': apikey
                }
            });
        return response;
    }

    static async findCustomerVehicleInactivePause(list_id: any, vehcileNo: any, apikey: any, field_id: any) {
        let custom_fields = JSON.stringify([{ "field_id": field_id, "operator": "=", "value": vehcileNo }])

        
            // let apiReport = {
            //     external_api_name: 'clickup',
            //     event_name: 'find_customer_vehicle',
            //     trigger_datetime: new Date().toISOString(),
            //     request_data: custom_fields,
            // }

            let response = await axios.get(`https://api.clickup.com/api/v2/list/${list_id}/task?custom_fields=${custom_fields}&subtasks=true`,
                {
                    headers: {
                        'Authorization': apikey
                    }
                }).then(async (response) => {
                    //apiReport['status_code'] = response.status
                    if (response.status == 200) {
                        //apiReport['response_data'] = JSON.stringify(response.data)
                        if (response.data.tasks.length) {

                            return response.data.tasks[0];
                        } else {

                            return null;
                        }
                    } else {
                        //apiReport['response_data'] = JSON.stringify(response.data)


                        return null
                    }

                }).catch(async (error) => {
                    if (error.response) {
                        // apiReport['status_code'] = error.response.status ?? 400
                        // apiReport['response_data'] = JSON.stringify(error.response.data)
                    }
                });

            return response


        
    }
    
}