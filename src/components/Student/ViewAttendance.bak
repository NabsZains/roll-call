<template>
  <v-data-table
    v-bind:headers="headers"
    :items="items"
    class="elevation-1"
    hide-actions
    light
    expand="true"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.attended }}</td>
      <td class="text-xs-right">{{ props.item.delivered }}</td>
      <td class="text-xs-right">{{ props.item.percentage }}</td>
      <td class="text-xs-right">{{ props.item.updatedOn }}</td>
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
            value: 'name'
          },
          { text: 'Attended', value: 'attended' },
          { text: 'Delivered', value: 'delivered' },
          { text: 'Percentage %', value: 'percentage' },
          { text: 'Updated on', value: 'updatedOn' },
        ],
        items: [
          {
            value: false,
            name: 'Software Engineering',
            attended: 16,
            delivered: 20,
            percentage: 80,
            updatedOn: '11:50 am, 1.12.2017',
          },
          {
            value: false,
            name: 'Operating System',
            attended: 15,
            delivered: 20,
            percentage: 65,
            updatedOn: '11:50 am, 1.12.2017',
          },
          {
            value: false,
            name: 'OOP & C++',
            attended: 18,
            delivered: 20,
            percentage: 85,
            updatedOn: '11:50 am, 1.12.2017',
          },
          {
            value: false,
            name: 'Industrial Management',
            attended: 19,
            delivered: 20,
            percentage: 95,
            updatedOn: '11:50 am, 1.12.2017',
          },
          {
            value: false,
            name: 'Linux Lab',
            attended: 17,
            delivered: 20,
            percentage: 75,
            updatedOn: '11:50 am, 1.12.2017',
          },
          {
            value: false,
            name: 'OOP & C++ Lab',
            attended: 16,
            delivered: 20,
            percentage: 70,
            updatedOn: '11:50 am, 1.12.2017',
          },
          {
            value: false,
            name: 'Project lab - 1',
            attended: 12,
            delivered: 20,
            percentage: 67,
            updatedOn: '11:50 am, 1.12.2017',
          },
        ]
      }
    }
  }
</script>
