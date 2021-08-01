import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import SimpleTable from "../../components/table/SimpleTable";
import Container from "../../layouts/Container";

export default function Users() {
  return(
    <Container title={"Users"}>
      <SimpleTable ContextComponent={UsersContextComponent} />
    </Container>
  )
}

const UsersContextComponent = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon className="w-5 h-5" />}>
        Actions
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  )
}