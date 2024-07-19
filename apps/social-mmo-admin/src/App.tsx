import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ForumList } from "./forum/ForumList";
import { ForumCreate } from "./forum/ForumCreate";
import { ForumEdit } from "./forum/ForumEdit";
import { ForumShow } from "./forum/ForumShow";
import { ThreadList } from "./thread/ThreadList";
import { ThreadCreate } from "./thread/ThreadCreate";
import { ThreadEdit } from "./thread/ThreadEdit";
import { ThreadShow } from "./thread/ThreadShow";
import { PostList } from "./post/PostList";
import { PostCreate } from "./post/PostCreate";
import { PostEdit } from "./post/PostEdit";
import { PostShow } from "./post/PostShow";
import { EventList } from "./event/EventList";
import { EventCreate } from "./event/EventCreate";
import { EventEdit } from "./event/EventEdit";
import { EventShow } from "./event/EventShow";
import { RewardList } from "./reward/RewardList";
import { RewardCreate } from "./reward/RewardCreate";
import { RewardEdit } from "./reward/RewardEdit";
import { RewardShow } from "./reward/RewardShow";
import { QuestList } from "./quest/QuestList";
import { QuestCreate } from "./quest/QuestCreate";
import { QuestEdit } from "./quest/QuestEdit";
import { QuestShow } from "./quest/QuestShow";
import { ReputationList } from "./reputation/ReputationList";
import { ReputationCreate } from "./reputation/ReputationCreate";
import { ReputationEdit } from "./reputation/ReputationEdit";
import { ReputationShow } from "./reputation/ReputationShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ClothingItemList } from "./clothingItem/ClothingItemList";
import { ClothingItemCreate } from "./clothingItem/ClothingItemCreate";
import { ClothingItemEdit } from "./clothingItem/ClothingItemEdit";
import { ClothingItemShow } from "./clothingItem/ClothingItemShow";
import { AvatarList } from "./avatar/AvatarList";
import { AvatarCreate } from "./avatar/AvatarCreate";
import { AvatarEdit } from "./avatar/AvatarEdit";
import { AvatarShow } from "./avatar/AvatarShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SocialMMO"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Forum"
          list={ForumList}
          edit={ForumEdit}
          create={ForumCreate}
          show={ForumShow}
        />
        <Resource
          name="Thread"
          list={ThreadList}
          edit={ThreadEdit}
          create={ThreadCreate}
          show={ThreadShow}
        />
        <Resource
          name="Post"
          list={PostList}
          edit={PostEdit}
          create={PostCreate}
          show={PostShow}
        />
        <Resource
          name="Event"
          list={EventList}
          edit={EventEdit}
          create={EventCreate}
          show={EventShow}
        />
        <Resource
          name="Reward"
          list={RewardList}
          edit={RewardEdit}
          create={RewardCreate}
          show={RewardShow}
        />
        <Resource
          name="Quest"
          list={QuestList}
          edit={QuestEdit}
          create={QuestCreate}
          show={QuestShow}
        />
        <Resource
          name="Reputation"
          list={ReputationList}
          edit={ReputationEdit}
          create={ReputationCreate}
          show={ReputationShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="ClothingItem"
          list={ClothingItemList}
          edit={ClothingItemEdit}
          create={ClothingItemCreate}
          show={ClothingItemShow}
        />
        <Resource
          name="Avatar"
          list={AvatarList}
          edit={AvatarEdit}
          create={AvatarCreate}
          show={AvatarShow}
        />
      </Admin>
    </div>
  );
};

export default App;
