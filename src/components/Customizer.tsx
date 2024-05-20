'use client'

import React from "react";
import {Switch} from "@nextui-org/switch";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Customizer() {

return (
    
     <Switch
      defaultSelected
      size="lg"
      color="warning"
      startContent={<FontAwesomeIcon icon={faSun} style={{width: "20px"}}/>}
      endContent={<FontAwesomeIcon icon={faMoon} style={{width: "20px"}}/>}
    >
    </Switch>  
  );
}
