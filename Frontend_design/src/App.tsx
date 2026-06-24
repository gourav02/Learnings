// import PostCard from '../Compound-components/src/PostCard'

// import ClickCounter from '../HOC/src/Components/ClickCounter'
// import HoverCounter from '../HOC/src/Components/HoverCounter'

// import ClickCounterOne from '../Render_Props/src/ClickCounterOne'
// import HoverCounterTwo from '../Render_Props/src/HoverCounterTwo'

// import ClickCounterThree from '../Custom-Hook/clickCounterThree'

import { Provider } from 'react-redux'
// import {Counter} from '../useReducer/Counter'
import {Counterr} from '../RTK/Counterr';
import {store} from '../RTK/store'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import {Demo} from '../React-Query/Demo';
const App = () => {

  const queryCLient = new QueryClient();
  return (
    <QueryClientProvider client={queryCLient}>
    <Provider store={store}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', padding: '20px' }}>
      {/* <div>
        <h2>Compound Components</h2>
        <PostCard
          post={{
            id: 1,
            title: 'post title',
            content: 'post content',
          }}
        >
          <PostCard.title />
          <PostCard.content />
          <PostCard.button />
        </PostCard>
      </div> */}

      {/* <div>
        <h2>HOC Components</h2>
        <div style={{ display: 'flex', gap: '20px' }}>
          <ClickCounterOne />
          <HoverCounterTwo />
        </div>
      </div> */}

      <div>
        <h2>Custom Hook Components</h2>
        <div style={{ display: 'flex', gap: '20px' }}>
          {/* <ClickCounterThree /> */}
          {/* <HoverCounterTwo /> */}
          {/* <Counterr /> */}
          <Demo />
        </div>
      </div>
    </div>
    </Provider>
    </QueryClientProvider>
  )
}

export default App
