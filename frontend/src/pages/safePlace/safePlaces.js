import React, { useContext } from "react";
import Geocoder from "react-mapbox-gl-geocoder";
import ReactMapGL from "react-map-gl";
import { MyContext } from "../../context";
import Form from "../../components/Form";
import {
  Flex,
  Stack,
  FormControl,
  InputGroup,
  InputLeftElement,
  Input,
  Textarea,
  useToast
} from "@chakra-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarked } from "@fortawesome/free-solid-svg-icons";

const mapAccess = {
  mapboxApiAccessToken: process.env.REACT_APP_MAPBOX_KEY
};

const mapStyle = {
  width: "79vw",
  height: "20vh",
  position: "absolute"
};

const queryParams = {
  country: "mx"
};

const SafePlace = ({history}) => {
  const context = useContext(MyContext);
  const toast = useToast()

  const addPlace = e => {
    context
      .handleSafePlaceSubmit(e)
      .then(res => {
        toast({
          title: 'Place Created',
          status: 'success',
          isClosable: true
        })
        history.push('/')
      })
      .catch(err => {
        toast({
          title: 'Something went wrong',
          description: 'Please try again later!!',
          status: 'error'
        })
      })
  };

  const onSelect = (e, item) => {
    context.handleOnSelectMap(e, item);
  };

  const changeViewPort = newViewPort => {
    context.updateViewPort(newViewPort);
  };

  return (
    <MyContext.Consumer>
      {context => {
        const { viewport } = context.state;
        return (
          <Flex backgroundColor="#110D40" w="100vw" h="90vh" justify="center">
            <Stack>
              <Form
                submit={addPlace}
                bgColor="transparent"
                title="Add Safe Place"
              >
                <Geocoder
                  {...mapAccess}
                  onSelected={onSelect}
                  viewport={viewport}
                  hideOnSelect={true}
                  queryParams={queryParams}
                  limit={10}
                  className="react-geocoder"
                  initialInputValue={"Search"}
                  color="white"
                />
                <ReactMapGL
                  {...mapAccess}
                  {...viewport}
                  {...mapStyle}
                  onViewportChange={changeViewPort}
                />
                <br />
                <FormControl isRequired>
                  <InputGroup>
                    <InputLeftElement
                      children={
                        <FontAwesomeIcon
                          icon={faMapMarked}
                          size="1x"
                          color="gray"
                        />
                      }
                    />
                    <Input
                      name="name"
                      type="text"
                      placeholder="Name"
                      value={context.state.formSafePlace.name}
                      onChange={context.handleSafePlaceInput}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <InputGroup>
                    <Textarea
                      name="description"
                      type="text"
                      placeholder="Description"
                      value={context.state.formSafePlace.description}
                      onChange={context.handleSafePlaceInput}
                    />
                  </InputGroup>
                </FormControl>
              </Form>
            </Stack>
          </Flex>
        );
      }}
    </MyContext.Consumer>
  );
};

export default SafePlace;
