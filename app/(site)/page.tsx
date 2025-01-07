import { Button } from '@/components/ui/button'
import * as Tabs from '@radix-ui/react-tabs'

const Home = () => {
  return (
    <div className="flex items-center justify-center w-full mt-24">
      <Tabs.Root className="TabsRoot" defaultValue="tab1">
        <Tabs.List className="TabsList" aria-label="Manage your account">
          <Tabs.Trigger asChild className="TabsTrigger" value="tab1">
            <Button
              className="hover:border-black rounded-full mx-10 data-[state=active]:border-black"
              variant="outline"
            >
              Text to Speech
            </Button>
          </Tabs.Trigger>
          <Tabs.Trigger asChild className="TabsTrigger" value="tab2">
            <Button
              className="hover:border-black rounded-full mx-10 data-[state=active]:border-black"
              variant="outline"
            >
              Text to Speech
            </Button>
          </Tabs.Trigger>
          <Tabs.Trigger asChild className="TabsTrigger" value="tab3">
            <Button
              className="hover:border-black rounded-full mx-10 data-[state=active]:border-black"
              variant="outline"
            >
              Dubbing
            </Button>
          </Tabs.Trigger>
          <Tabs.Trigger asChild className="TabsTrigger" value="tab4">
            <Button
              className="hover:border-black rounded-full mx-10 data-[state=active]:border-black"
              variant="outline"
            >
              Text to SFX
            </Button>
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="TabsContent mt-12" value="tab1">
          <p className="Text">Make changes to your account here. Click save when youre done.</p>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
              Name
            </label>
            <input className="Input" id="name" defaultValue="Pedro Duarte" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="username">
              Username
            </label>
            <input className="Input" id="username" defaultValue="@peduarte" />
          </fieldset>
          <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
            <button className="Button green">Save changes</button>
          </div>
        </Tabs.Content>
        <Tabs.Content className="TabsContent mt-12" value="tab2">
          <p className="Text">Change your password here. After saving, youll be logged out.</p>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="currentPassword">
              Current password
            </label>
            <input className="Input" id="currentPassword" type="password" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="newPassword">
              New password
            </label>
            <input className="Input" id="newPassword" type="password" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="confirmPassword">
              Confirm password
            </label>
            <input className="Input" id="confirmPassword" type="password" />
          </fieldset>
          <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
            <button className="Button green">Change password</button>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  )
}

export default Home
