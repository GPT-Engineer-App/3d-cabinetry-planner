import React from "react";
import { Box, Flex, Heading, Button, IconButton, VStack, HStack, Text, Divider, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash, FaSave, FaCubes } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleAddCabinet = () => {
    toast({
      title: "Cabinet Added",
      description: "A new cabinet has been added to the room layout.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleSaveLayout = () => {
    toast({
      title: "Layout Saved",
      description: "Your room layout has been saved successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box p={6}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          3D Room Planner for Cabinetry
        </Heading>
        <Flex justifyContent="center" p={4}>
          <Box w="500px" h="300px" bg="gray.200" borderRadius="md" display="flex" alignItems="center" justifyContent="center" boxShadow="md">
            <Text color="gray.500">3D Room View</Text>
            {/* Here you would render the actual 3D room planner */}
          </Box>
        </Flex>
        <Divider />
        <HStack justifyContent="space-between">
          <IconButton icon={<FaPlus />} aria-label="Add cabinet" onClick={handleAddCabinet} />
          <IconButton icon={<FaTrash />} aria-label="Remove cabinet" isDisabled />
          <IconButton icon={<FaSave />} aria-label="Save layout" onClick={handleSaveLayout} />
        </HStack>
        <Divider />
        <Flex justifyContent="center" p={4}>
          <Button leftIcon={<FaCubes />} colorScheme="teal" variant="solid">
            View Cabinets
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Index;
