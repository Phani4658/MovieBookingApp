import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { BookTicketsBtn } from '../MovieDetails/styledcomponents'
import { FormInput, FormLabel, FormSelect } from './styledcomponents'

const TicketForm = ({name}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <BookTicketsBtn onClick={onOpen}>Book Tickets</BookTicketsBtn>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Book Tickets for {name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <FormLabel>Email</FormLabel>
                <FormInput input="text" />
                <FormLabel>No of Seats</FormLabel>
                <FormInput input="number" />
                <FormLabel>Show Timings</FormLabel>
                <FormSelect>
                    <option>10:30 AM</option>
                    <option>1:30 PM</option>
                    <option>4:30 PM</option>
                    <option>7:00 PM</option>
                    <option>10:00 PM</option>
                </FormSelect>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost' onClick={onClose}>Confirm</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default TicketForm