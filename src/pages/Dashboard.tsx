// Depreciated
export { }
// import React, { useState } from "react";
// import {
//   Grid,
//   GridItem,
//   useTheme,
//   Tabs,
//   useMediaQuery,
//   useDisclosure,
// } from "@chakra-ui/react";
// import { useAuth } from "../lib/hooks/useAuth";
// import SideBar from "../Component/Dashboard/SideBar";
// import DashHeader from "../Component/Dashboard/DashHeader";
// import DashPanels from "../Component/Dashboard/DashTabs";
// import DashboardContext, { DashboardStates } from "../Contexts/DashboardContext";
// import Logout from "../Component/Dashboard/LogoutModal";

// function Dashboard() {
//   const { auth } = useAuth();
//   const theme = useTheme();
//   const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");
//   // const { tabIndex, setTabIndex } = DashboardStates()
//   const [opened, setOpened] = useState<boolean>(false)
//   const { isOpen, onOpen, onClose }: { isOpen: boolean, onOpen: () => void, onClose: () => void } = useDisclosure()
//   console.log({ auth });

//   const handleTabChange = (index) => {
//     if (index === tabIndex) return;
//     if (index === 8 && !opened) {
//       onOpen()
//       setOpened(true)
//     } else if (index === 8 && opened) {
//       setTabIndex(tabIndex)
//       setOpened(false)
//     } else {
//       setTabIndex(index)
//     }
//   }
//   return (
//     <Tabs index={tabIndex} onChange={handleTabChange}>
//       <Grid
//         gridTemplateColumns={isSmallerScreen ? "100%" : "19% 81%"}
//       >
//         {
//           !isSmallerScreen &&
//           <GridItem
//             bg={theme.colors.primary.main}
//           >
//             <SideBar />
//           </GridItem>
//         }
//         <GridItem position="relative">
//           <Logout isOpen={isOpen} onClose={onClose} />
//           <DashHeader auth={auth} />
//           <DashPanels />
//         </GridItem>
//       </Grid>
//     </Tabs>
//   );
// }

// function Index(): JSX.Element {
//   return (
//     <DashboardContext>
//       <Dashboard />
//     </DashboardContext>
//   )
// }

// export default Index;
