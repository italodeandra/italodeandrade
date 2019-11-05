import React, { FunctionComponent } from 'react'
import ListItem, { ListItemProps } from './Item/ListItem'

interface Props {
}

interface Component extends FunctionComponent<Props> {
    Item: FunctionComponent<ListItemProps>
}

const List: Component = ({ children }) => {
    return (
        <div className='List'>
            {children}
        </div>
    )
}

List.Item = ListItem

export default List
