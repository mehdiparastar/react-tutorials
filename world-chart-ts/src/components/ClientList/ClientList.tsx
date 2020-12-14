/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/ClientList/ClientList.tsx
*/

import React from 'react'
import './ClientList.scss'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import { clientsObject } from '../../model'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '150px',
      maxWidth: 150,
      backgroundColor: theme.palette.background.paper,
      maxHeight: '340px',
      overflow: 'auto',
      paddingTop: '5px',
      scroll: 'paper',
    },
  })
)

const ClientList = (props: IClientListProps) => {
  // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
  const handleClick = (id: number) => {
    // console.log(`id: ${id}`)
    props.setSelectedClient(props.clientsData[id])
  }
  const classes = useStyles()
  return (
    <List dense className={classes.root}>
      {props.clientsData.map((value) => {
        return (
          <ListItem key={value.id} button onClick={() => handleClick(value.id - 1)}>
            <ListItemAvatar>
              <img alt={`${value.name} avatar`} src={`/clients-logo/${value.logo}`} width="100px" />
            </ListItemAvatar>
          </ListItem>
        )
      })}
    </List>
  )
}

interface IClientListProps {
  clientsData: clientsObject[]
  setSelectedClient: Function
}

export default ClientList
