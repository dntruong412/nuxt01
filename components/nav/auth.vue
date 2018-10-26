<template>
    <ul class="navbar-nav">
        <li class="nav-item" v-if="!login_state">
            <router-link class="nav-link bg-warning rounded btn-sm text-light" :to="{ name: 'login' }">
                &nbsp;&nbsp;&nbsp;<i class="fas fa-user"></i> Login&nbsp;&nbsp;&nbsp;
            </router-link>
        </li>
        <li class="nav-item dropdown" v-else>
            <a class="nav-link dropdown-toggle bg-warning rounded btn-sm text-light" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                &nbsp;&nbsp;&nbsp;<i class="fas fa-user"></i>&nbsp;&nbsp;&nbsp;    
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <div class="dropdown-header text-success">
                    <h6>{{ user.name }}</h6>
                </div>
                <router-link class="dropdown-item" :to="{ name: 'mem' }">
                    My page
                </router-link>
                <a class="dropdown-item" @click="logout">Logout</a>
            </div>
        </li>
    </ul>
</template>

<script type="text/javascript">
    import { mapState } from "vuex";
    import types from "~/store/types";

    export default {
        computed: mapState({
            login_state: state => state.auth.state,
            user: state => state.auth.user
        }),
        methods: {
            logout() {
                alert('go out !!!');
                this.$store.dispatch(types.LOGOUT);
                this.$router.push({ path: '/' });
            }
        }
    }
</script>