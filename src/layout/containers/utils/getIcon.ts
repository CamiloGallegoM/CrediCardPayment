import { RouteNameNavigation } from "../../routes/routes"

type RouteName = {
    key?:string
    name:string, 
    params?: string
}

export const getIconTab = (route:RouteName) =>{
    let iconName = ''
    let typeIcon = ''
    switch (route.name){
        case RouteNameNavigation.HomeNameTab:
            iconName = 'home-outline';
            typeIcon = 'ionicon'
            break
        case RouteNameNavigation.TransactionNameTab:
            iconName = 'cash-check';
            typeIcon = 'material-community'
            break
        default:
            iconName = ''
            typeIcon = ''
            break
    }
    return {iconName,typeIcon}
}