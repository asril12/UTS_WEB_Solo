<template>
    <div>
        <Menu/>
        <div class="container">
            <h1 class="m0">Article</h1>
            <div class="row">
                <div class="col">
                    <p class="mt5 mb20 tc-green">Manage article data here</p>
                </div>
                <div class="col flex">
                    <router-link to="/add-article">
                        <button class="bt-green">+ Add Article</button>
                    </router-link>
                </div>
            </div>
            <div class="row bg-blue mt10 p10">
                <div class="col">
                    <input
                        class="search-field"
                        type="text"
                        id="deskripsi"
                        placeholder="Tambah deskripsi..."
                    />
                </div>
                <div class="col flex">
                    <button class="bt-blue">Filter</button>
                </div>
            </div>
            <div class="mt50">
                <table>
                    <thead>
                        <tr>
                            <th>ARTICLE NAME</th>
                            <th>BROADCAST SCHEDULE</th>
                            <th>VALID FORM</th>
                            <th>VALID UNTIL</th>
                            <th>ARTICLE STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item of list_user" :key="item.id">
                            <td class="center">{{ item.ARTICLENAME }}</td>
                            <td class="center">{{ item.BROADCASTSCHEDULE }}</td>
                            <td class="center"><label class="label-green">{{item.VALIDFORM}}</label></td>
                            <td class="center"><label class="label-green">{{item.VALIDUNTIL}}</label></td>
                            <td class="center"><label class="label-green">{{item.ARTICLESTATUS}}</label></td>
                            <td class="center">
                                <div v-if="item.role === 1">
                                    <label class="label-green">Super Admin</label>
                                </div>
                                <div v-if="item.role === 2">
                                    <label class="label-blue">Sales</label>
                                </div>
                                <div v-if="item.role === 3">
                                    <label class="label-yellow">Marketing</label>
                                </div>
                            </td>
                            <td class="center">
                                <div class="mt5">
                                    <router-link to="/edit-article">
                                        <img src="../../assets/icons/edit.svg">
                                    </router-link>
                                </div>
                                <div class="mt5">
                                    <router-link to="/detail-article">
                                        <img src="../../assets/icons/detail.svg">
                                    </router-link>
                                </div>
                                <div class="mt5">
                                    <img src="../../assets/icons/delete.svg">
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Menu from "../../components/menu.vue"

export default {
	name: 'list-user',
	components: {
		Menu
	},
    data(){
        return {
            list_user: [
                {
                    id: "1",
                    ARTICLENAME: "Produk Rumah dan Furniture",
                    BROADCASTSCHEDULE: "Senin",
                    VALIDFORM: "01-06-2021",
                    VALIDUNTIL: "03-06-2021",
                    ARTICLESTATUS: "Active"
                },
                {
                    id: "2",
                    ARTICLENAME: "Pakaian dan Outfit",
                    BROADCASTSCHEDULE: "Kamis",
                    VALIDFORM: "04-06-2021",
                    VALIDUNTIL: "06-06-2021",
                    ARTICLESTATUS: "Active"
                },
            ]
        }
    }
}
</script>