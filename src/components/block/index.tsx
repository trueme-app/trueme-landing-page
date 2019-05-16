import * as React from 'react'
import { SweepContainer, WaveContainer } from './styles'

type BlockType = 'wave' | 'sweep'

interface IBlock {
  children: React.ReactNode[],
  type: BlockType,
}

class Block extends React.Component<IBlock> {
  render() {
    const { children, type } = this.props

    switch(type) {
      case 'wave':
        return <WaveContainer>{children}</WaveContainer>
      case 'sweep':
        return <SweepContainer>{children}</SweepContainer>
    }

    return false
  }
}

export default Block
