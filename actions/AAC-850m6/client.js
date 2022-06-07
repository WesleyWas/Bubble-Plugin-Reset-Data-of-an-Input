function(properties, context) {
	
    if(properties.input_type === "Searchbox"){
        document.querySelector("#" + properties.input_id + " > span > input.tt-input").value = null
    }else if(properties.input_type === "Input/Multiline Input"){
        document.getElementById(properties.input_id).value = null;
    }else if(properties.input_type === "Dropdown"){
        document.getElementById(properties.input_id).selectedIndex = 0;
    }

}