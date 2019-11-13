import React, {useState} from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Tooltip } from 'reactstrap';

const PlanetCard = props => {
    const [dropdownOpen, setOpen] = useState(false);
  
    const toggleDrop = () => setOpen(!dropdownOpen);

    
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggleTool = () => setTooltipOpen(!tooltipOpen);

    return (
        <div className="list">
            <Card body inverse style={{
                backgroundColor: '#4B0082',
                textAlign: 'center',
                fontSize: '1.6rem'
                }}>
                <CardTitle>{props.list.title}</CardTitle>
                <CardImg top width="100%" src={props.list.url} alt="Nasa's photo of the day" />
                <CardBody body inverse style={{
                    backgroundColor: '#D8BFD8',
                    color: 'black',
                    fontSize: '1.4rem'
                    }}>
                    <CardText>{props.list.explanation}</CardText>
                    <Button color="primary" body inverse style={{marginRight: '10px'}}>{props.list.date}</Button>
                    <ButtonDropdown isOpen={dropdownOpen} toggle={toggleDrop}>
                        <DropdownToggle caret color="info">
                            More information
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem id="serVer" header>Server Version</DropdownItem>
                                <Tooltip placement="right" isOpen={tooltipOpen} target="serVer" toggle={toggleTool}>
                                    {props.list.service_version}
                                </Tooltip>
                            <DropdownItem id="medType" header>Media Type</DropdownItem>
                                <Tooltip placement="right" isOpen={tooltipOpen} target="medType" toggle={toggleTool}>
                                   {props.list.media_type}
                                </Tooltip>
                        </DropdownMenu>
                    </ButtonDropdown>
                </CardBody>
            </Card>
        </div>
    );
};

export default PlanetCard;