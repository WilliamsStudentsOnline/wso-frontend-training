import React from 'react';
import {
  EuiButton,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiListGroup,
  EuiListGroupItem,
  EuiText,
  EuiTitle,
  EuiPage,
  EuiPageBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiPageSideBar,
  EuiSideNav,
  EuiSpacer,
} from '@elastic/eui';
import Header from './Header';
import PageSection from './PageSection';

// Other themes are also available - see files at
// node_modules/@elastic/eui/dist/
import '@elastic/eui/dist/eui_theme_dark.css';
import './App.css';

const App = () => {
  const sections = ['About Me', 'Projects', 'Contact Me'];

  const toHref = (title) => {
    return '#' + title.toLowerCase().split(' ').join('-');
  };

  const navItems = sections.map((section) => ({
    name: section,
    id: section,
    href: toHref(section),
  }));

  const renderTitle = () => {
    return (
      <EuiPageHeader>
        <EuiPageHeaderSection>
          <EuiTitle size='l'>
            <h1>Ephraim Williams</h1>
          </EuiTitle>
        </EuiPageHeaderSection>
      </EuiPageHeader>
    );
  };

  return (
    <div className='App'>
      <Header sections={sections} className='sticky' />
      <EuiPage restrictWidth={true}>
        <EuiPageSideBar>
          <EuiSideNav items={navItems} />
        </EuiPageSideBar>

        <EuiPageBody component='div'>
          {renderTitle()}

          <PageSection title='About Me'>
            <EuiText>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat aliquet
                lacinia. Fusce lobortis facilisis gravida. Aenean aliquam semper nulla, pellentesque
                bibendum odio rutrum sed. Morbi at finibus lorem, et finibus lacus. Vivamus a diam
                ornare, efficitur nulla in, dignissim tortor. Maecenas rutrum efficitur lacus, quis
                dictum enim sagittis eget. Nam sed sapien quis enim aliquam pharetra. Aenean sodales
                enim id sollicitudin rutrum. Nullam mollis risus in sapien lacinia pharetra.
                Vestibulum sed sodales neque. Curabitur eros tortor, mollis vitae ipsum eu, vehicula
                dignissim ipsum. Sed consectetur pharetra euismod. Ut neque augue, tincidunt sit
                amet maximus at, tincidunt id elit.
              </p>
            </EuiText>
          </PageSection>
          <EuiSpacer />

          <PageSection title='Projects'>
            <EuiText>
              <p>Here are some of my projects:</p>
            </EuiText>
            <EuiFlexGroup gutterSize='l'>
              <EuiFlexItem>
                <EuiCard
                  icon={<EuiIcon size='xxl' type='devToolsApp' />}
                  title='Built Something'
                  description='With like, a spanner and a screwdriver.'
                  footer={<EuiButton aria-label='Go to Developers Tools'>See it</EuiButton>}
                />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiCard
                  icon={<EuiIcon size='xxl' type='devToolsApp' />}
                  title='Built Something Else'
                  description='With two hammers and a torch.'
                  footer={<EuiButton aria-label='Go to Developers Tools'>See it</EuiButton>}
                />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiCard
                  icon={<EuiIcon size='xxl' type='devToolsApp' />}
                  title='Built Another thing'
                  description='How many things can I build?'
                  footer={<EuiButton aria-label='Go to Developers Tools'>See it</EuiButton>}
                />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiCard
                  icon={<EuiIcon size='xxl' type='devToolsApp' />}
                  title='Built The THING'
                  description='With a lot of gusto.'
                  footer={<EuiButton aria-label='Go to Developers Tools'>See it</EuiButton>}
                />
              </EuiFlexItem>
            </EuiFlexGroup>
          </PageSection>
          <EuiSpacer />

          <PageSection title='Contact Me'>
            <EuiListGroup>
              <EuiListGroupItem label='@ephraimbill' iconType='logoGithub' />
              <EuiListGroupItem label='ephraim@carrierpigeon.com' iconType='logoGmail' />
            </EuiListGroup>
          </PageSection>
        </EuiPageBody>
      </EuiPage>
    </div>
  );
};

export default App;
