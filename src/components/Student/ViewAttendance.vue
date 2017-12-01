<template>
  <v-data-table
    v-bind:headers="headers"
    :items="items"
    class="elevation-9"
    hide-actions
    light
    expand="true"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.attended }}</td>
      <td class="text-xs-right">{{ props.item.delivered }}</td>
      <td class="text-xs-right">{{ props.item.percentage }}</td>
      <td class="text-xs-right">{{ props.item.updatedon }}</td>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Subject (Subject Code)',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Attended', value: 'Attended' },
          { text: 'Delivered', value: 'Delivered' },
          { text: 'Percentage %', value: 'Percentage %' },
          { text: 'Updated on', value: 'Updated on' },
        ],
        items: [
          {
            value: false,
            name: 'Software Engineering',
            attended: 16,
            delivered: 20,
            percentage: 80,
            updatedon: '11:50 am, 1.12.2017',
          },
          {
            value: false,
            name: 'Operating System',
            attended: 15,
            delivered: 20,
            percentage: 65,
            updatedon: '11:50 am, 1.12.2017',
          },
          {
            value: false,
            name: 'OOP & C++',
            attended: 18,
            delivered: 20,
            percentage: 85,
            updatedon: '11:50 am, 1.12.2017',
          },
          {
            value: false,
            name: 'Industrial Management',
            attended: 19,
            delivered: 20,
            percentage: 95,
            updatedon: '11:50 am, 1.12.2017',
          },
          {
            value: false,
            name: 'Linux Lab',
            attended: 17,
            delivered: 20,
            percentage: 75,
            updatedon: '11:50 am, 1.12.2017',
          },
          {
            value: false,
            name: 'OOP & C++ Lab',
            attended: 16,
            delivered: 20,
            percentage: 70,
            updatedon: '11:50 am, 1.12.2017',
          },
          {
            value: false,
            name: 'Project lab - 1',
            attended: 12,
            delivered: 20,
            percentage: 67,
            updatedon: '11:50 am, 1.12.2017',
          },
        ]
      }
    }
  }
</script>
