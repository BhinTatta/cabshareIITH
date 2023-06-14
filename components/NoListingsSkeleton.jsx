import {
  Box,
  SimpleGrid,
  Skeleton,
  useToast,
  Button,
  text,
} from "@chakra-ui/react";
import SkeletonGrid from "./SkeletonGrid";
import { useRouter } from "next/router";
const NoListingsSkeleton = ({ user }) => {
  const toast = useToast();
  const router = useRouter();

  const handleCreateListing = () => {
    router.push("/createListing");
  };

  const handleSingin = () => {
    toast({
      title: "Use the LogIn button from navbar pweaese 🥺👉👈",
      status: "info",
    });
  };

  return (
    <>
      <Box textAlign="center" p={8}>
        <Text
          fontSize={{ base: "2rem", md: "2rem", lg: "2rem" }}
          fontWeight="bold"
        >
          (╥﹏╥)
          {"\n"} No cabs available for this day.
        </Text>

        <Text fontSize="1.2rem" fontWeight="normal" mb={4}>
          Try creating a new listing; you might find someone.
        </Text>
        {!user ? (
          <>
            <Button colorScheme="teal" onClick={handleSingin}>
              Sign In
            </Button>
          </>
        ) : (
          <Button colorScheme="teal" onClick={handleCreateListing}>
            Create Listing
          </Button>
        )}
      </Box>
      <SkeletonGrid />
    </>
  );
};

export default NoListingsSkeleton;
