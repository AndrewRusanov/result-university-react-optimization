import { ErrorPage } from '@/widgets'
import { Component, ErrorInfo, ReactNode, Suspense } from 'react'

interface State {
  hasError: boolean
}

interface Props {
  children: ReactNode
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <Suspense>
          <ErrorPage />
        </Suspense>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
