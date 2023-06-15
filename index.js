//declare the variable returnFirstTwoDrivers with const
const  returnFirstTwoDrivers = function anonymousFunction([]){
    return (['calvo', 'elvis']);
    
    }
    
    const  returnLastTwoDrivers = function anonymousFunction([]){
        return (['roy', 'jakes']);
    
    }
    const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers];
    
    function createFareMultiplier(anInteger){
        return function(fare){
          return fare*anInteger;
        }
    }
    const fareDoubler = createFareMultiplier(2);
    const fareTripler = createFareMultiplier(3);
    
    const selectDifferentDrivers = function (arrayOfDrivers, driversToReturn) {
        return driversToReturn(arrayOfDrivers);
    }