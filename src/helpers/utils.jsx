function truncateString(str,max_length)
{
    if(str.length <=max_length){
        return str
    }
    return str.substr(0,max_length)+"...";
}
export {truncateString}