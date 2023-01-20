import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`https://test-project-e4qezk3az-ayush1430.vercel.app/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
