import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const StyledLink = styled(NavLink)`
    color: white;
    background-color: blue;
    display: inline-block;
    padding: 13px 18px;
    margin: 15px 25px;
    border-radius: 15%;

    &.active {
        background-color: orange;
    }
`
export default StyledLink;