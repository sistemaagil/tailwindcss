import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { Me01Component } from '../feature/helpdesk/me01/me01.component';
import { Me02Component } from '../feature/helpdesk/me02/me02.component';
import { SidebarConfigComponent } from '../feature/helpdesk/sidebar-config/sidebar-config.component';
import { FalconDashboardRecentComponent } from '../feature/falcon/dashboard/falcon-dashboard-recent/falcon-dashboard-recent.component';
import { CrmWelcomeToComponent } from '../feature/falcon/dasboard/crm-welcome-to/crm-welcome-to.component';
import { ManagementTeamProgressComponent } from '../feature/falcon/dasboard/management-team-progress/management-team-progress.component';
import { ECommerceGoodAfternonComponent } from '../feature/falcon/dasboard/e-commerce-good-afternon/e-commerce-good-afternon.component';
import { DistributivoCalendarioComponent } from '../feature/distributivo/distributivo-calendario/distributivo-calendario.component';
import { DistributivoCursosComponent } from '../feature/Distributivo-Cursos/distributivo-cursos/distributivo-cursos.component';
import { ChatActivoComponent } from '../feature/chatActivo/chat-activo/chat-activo.component';
import { FalconUsingStorageComponent } from '../feature/falcon/dashboard/falcon-using-storage/falcon-using-storage.component';
import { FalconDasboardCrmForecastComponent } from '../feature/falcon/dashboard/falcon-dasboard-crm-forecast/falcon-dasboard-crm-forecast.component';
import { FalconDashboardCampaignsComponent } from '../feature/falcon/dashboard/falcon-dashboard-campaigns/falcon-dashboard-campaigns.component';
import { DistributivoLoginComponent } from '../feature/distributivo/distributivo-login/distributivo-login.component';
import { SidebarChatComponent } from '../feature/sidebar/sidebar-chat/sidebar-chat.component';
import { FalconDashboardSessionByBrowserComponent } from '../feature/falcon/dashboart/falcon-dashboard-session-by-browser/falcon-dashboard-session-by-browser.component';
import { FalconDashboardRunningComponent } from '../feature/falcon/dasboard/falcon-dashboard-running/falcon-dashboard-running.component';
import { IntelligenceComponent } from '../feature/falcon/dasboard/intelligence/intelligence.component';
import{ProductsComponent} from '../feature/falcon/dasboard/products/products.component';
import { StorageComponent } from '../feature/falcon/dasboard/storage/storage.component';
import{StatisticsComponent} from '../feature/falcon/dasboard/statistics/statistics.component';
import{OrdersComponent} from '../feature/falcon/dasboard/orders/orders.component'
import { FalconDashboardBandwidthComponent } from '../feature/falcon/dasboard/bandwidth-saved/falcon-dashboard-bandwidth/falcon-dashboard-bandwidth.component';
import { HelpdeskHomeHistoricoComponent } from '../feature/helpdesk/home-historico/helpdesk-home-historico/helpdesk-home-historico.component';
import { VolumenChatFiltroFechaComponent } from '../feature/volumen-chat-filtro-fecha/volumen-chat-filtro-fecha.component';
import { HelpdeskWidgetComponent } from '../feature/helpdesk-widget/helpdesk-widget.component';
import { UsersOnlineComponent } from '../feature/falcon/users-online/users-online.component';
import { RevenueComponent } from '../feature/falcon/dasboard/falcon-CRM/revenue/revenue.component';
import { TotalOrderComponent } from '../feature/falcon/dasboard/default/total-order/total-order.component';
import { FalconDashboardToDoListComponent } from '../feature/falcon/dasboard/to-do-list/falcon-dashboard-to-do-list/falcon-dashboard-to-do-list.component';
import { HelpdeskChatVolumeComponent } from '../feature/helpdesk/report/helpdesk-chat-volume/helpdesk-chat-volume.component';
import { DistributivoCalendario2Component } from '../feature/distributivo/distributivo-calendario2/distributivo-calendario2.component';
import { AverageCallDurationComponent } from '../feature/falcon/falcon-CRM/call-duratiom/average-call-duration/average-call-duration.component';
import { SharedFilesComponent } from '../feature/falcon/default/shared-files/shared-files.component';

import { TopPagesTodayComponent } from '../feature/falcon/dasboard/top-pages-today/top-pages-today.component';
import { ActiveUsersComponent } from '../feature/falcon/dasboard/active-users/active-users.component';
import { FalconECommerceBestProductsComponent } from '../feature/falcon/dasboard/e-commerce/falcon-e-commerce-best-products/falcon-e-commerce-best-products.component';
import { FalconManagementNewScheduleComponent } from '../feature/falcon/dasboard/management/falcon-management-new-schedule/falcon-management-new-schedule.component';
import { FalconClosevsgoalComponent } from '../feature/falcon/falcon-closevsgoal/falcon-closevsgoal.component';
import { FalconUsersComponent } from '../feature/falcon/falcon-users/falcon-users.component';
import { FalconTotalsalesComponent } from '../feature/falcon/falcon-totalsales/falcon-totalsales.component';
import { FalconAnalyticsCompletedComponent } from '../feature/falcon/falcon-analytics-completed/falcon-analytics-completed.component';
import { FalconRunningComponent } from '../feature/falcon/falcon-running/falcon-running.component';
import { MemberInfoComponent } from '../feature/falcon/member-info/member-info.component';
import { ECommerceRecentPurchasesComponent } from '../feature/falcon/e-commerce-recent-purchases/e-commerce-recent-purchases.component';
import { HelpdeskChatsComponent } from '../feature/helpdesk/helpdesk-chats/helpdesk-chats.component';

import { SidebarChartComponent } from '../feature/helpdesk/sidebar-chart/sidebar-chart.component';
import { NewContactComponent } from '../Falcon/dashboard/CRM/new-contact/new-contact.component';
import { FalconDashboardCRMNewContactComponent } from '../feature/falcon/dashboard/falcon-dashboard-crm-new-contact/falcon-dashboard-crm-new-contact.component';
import { FalconDashboardMarketShareComponent } from '../feature/falcon/dashboard/falcon-dashboard-market-share/falcon-dashboard-market-share.component';
import { MembersActivityComponent } from '../feature/falcon/management/members/members-activity/members-activity.component';
import { ReturningCustomerRateComponent } from '../feature/falcon/e-commerce/customer/returning-customer-rate/returning-customer-rate.component';

import { LeadConversionComponent } from '../feature/falcon/dasboard/lead-conversion/lead-conversion.component';
import { RunningProjectsComponent } from '../feature/falcon/dasboard/running-projects/running-projects.component';
import { FalconDashboardMostLeadsComponent } from '../feature/falcon/dashboard/falcon-dashboard-most-leads/falcon-dashboard-most-leads.component';
import { FalconManagementOrdersComponent } from '../falcon-management-orders/falcon-management-orders.component';
import { MensajeriaFiltroComponent } from '../feature/helpdesk/mensaje/mensajeria-filtro/mensajeria-filtro.component';
import { FalconDashboardManagementFalcondiscussionComponent } from '../feature/falcon/dashboard/falcon-dashboard-management-falcondiscussion/falcon-dashboard-management-falcondiscussion.component';
import { FalconDashboardAnalyticsConnectComponent } from '../feature/falcon/dashboard/falcon-dashboard-analytics-connect/falcon-dashboard-analytics-connect.component';
import { WeeklySalesComponent } from '../feature/falcon/default/weekly-sales/weekly-sales.component';
import { FalconDashboardTrafficSourceComponent } from '../feature/falcon/dashboard/falcon-dashboard-traffic-source/falcon-dashboard-traffic-source.component';
import { FalconDashboardManagementTODOLISTComponent } from '../feature/falcon/dashboard/falcon-dashboard-management-to-do-list/falcon-dashboard-management-to-do-list.component';
import { FalconDashboardManagementWELCOMETOFALCONComponent } from '../feature/falcon/dashboard/falcon-dashboard-management-welcome-tofalcon/falcon-dashboard-management-welcome-tofalcon.component';
import { FalconDashboardDefaultTOPPRODUCTSComponent } from '../feature/falcon/dashboard/falcon-dashboard-default-top-products/falcon-dashboard-default-top-products.component';
import { ECommerceSalesByPosLocationComponent } from '../feature/falcon/dasboard/e-commerce-sales-by-pos-location/e-commerce-sales-by-pos-location.component';
import { DateAndTimeComponent } from '../feature/falcon/events/events-details/date-and-time/date-and-time.component';
import { EventListComponent } from '../feature/falcon/events/events-list/event-list/event-list.component';
import { EventsMayYouLikeComponent } from '../feature/falcon/events/events-details/events-like/events-may-you-like/events-may-you-like.component';
import { FREENewYearsComponent } from '../feature/falcon/events/events-details/Free/free-new-years/free-new-years.component';
import { NewYearEveComponent } from '../feature/falcon/events/events-details/texto/new-year-eve/new-year-eve.component';
import { FalconAppEventCreateEventComponent } from '../feature/falcon/event/falcon-app-event-create-event/falcon-app-event-create-event.component';

import { FalconAppEventEventDetailsComponent } from '../feature/falcon/event/falcon-app-event-event-details/falcon-app-event-event-details.component';
import { CalendarComponent } from '../feature/falcon/calendar/calendar.component';
import { FalconECommerceProductGirdProductDetailsComponent } from '../feature/falcon/dashboard/falcon-e-commerce-product-gird-product-details/falcon-e-commerce-product-gird-product-details.component';
import { FalconECommerceWeklySalesComponent } from '../feature/falcon/dashboard/falcon-e-commerce-wekly-sales/falcon-e-commerce-wekly-sales.component';
import { FalconDashboardDefaultWeklySalesComponent } from '../feature/falcon/dashboard/falcon-dashboard-default-wekly-sales/falcon-dashboard-default-wekly-sales.component';
import { FalconECommerceProductGridDetaisComponent } from '../feature/falcon/e-commerce/falcon-e-commerce-product-grid-detais/falcon-e-commerce-product-grid-detais.component';
import { ShoppingCartComponent } from '../feature/falcon/e-commerce/shopping-cart/shopping-cart.component';
import { FalconDashboardSaasBANDWIDTHSAVEDComponent } from '../feature/falcon/dashboard/saas/falcon-dashboard-saas-bandwidth-saved/falcon-dashboard-saas-bandwidth-saved.component';
import { RecentActivityComponent } from '../feature/falcon/management/recent-activity/recent-activity.component';
import { TopProductsComponent } from '../feature/falcon/e-commerce/top-products/top-products.component';
import { FalconAPPEemailInboxComponent } from '../feature/falcon/eemail/falcon-app-eemail-inbox/falcon-app-eemail-inbox.component';
import { SaasActiveUsersComponent } from '../feature/falcon/dasboard/saas-active-users/saas-active-users.component';
import { FalconDashboardSaasMOREWITHFALCONComponent } from '../feature/falcon/dashboard/saas/falcon-dashboard-saas-morewith-falcon/falcon-dashboard-saas-morewith-falcon.component';
import { CustomersComponent } from '../feature/falcon/management/customers/customers.component';
import { SaasRevenueComponent } from '../feature/falcon/dasboard/saas-revenue/saas-revenue.component';
import { SaasConversionComponent } from '../feature/falcon/dasboard/saas-conversion/saas-conversion.component';
import { FalconAppEventOtherInfoComponent } from '../feature/falcon/app/falcon-app-event-other-info/falcon-app-event-other-info.component';
import { FalconAPPEemailEemailDetailComponent } from '../feature/falcon/eemail/falcon-app-eemail-eemail-detail/falcon-app-eemail-eemail-detail.component';
import { FalconAppEventTicketPriceComponent } from '../feature/falcon/app/falcon-app-event-ticket-price/falcon-app-event-ticket-price.component';
import { FalconAppScheduleComponent } from '../feature/falcon/app/falcon-app-schedule/falcon-app-schedule.component';
import { FalconDashboardSaasTRANSACTIONSUMMARYComponent } from '../feature/falcon/dashboard/saas/falcon-dashboard-saas-transaction-summary/falcon-dashboard-saas-transaction-summary.component';
import { FalconDashboardSaasSHAREDFILESComponent } from '../feature/falcon/dashboard/saas/falcon-dashboard-saas-shared-files/falcon-dashboard-saas-shared-files.component';
import { FalconDashboardSaasGrossRevenueComponent } from '../feature/falcon/dashboard/saas/falcon-dashboard-saas-gross-revenue/falcon-dashboard-saas-gross-revenue.component';
import { ECommerceTotalSalesComponent } from '../feature/falcon/dasboard/e-commerce-total-sales/e-commerce-total-sales.component';
import { SocialCreatePostComponent } from '../feature/falcon/dasboard/social-create-post/social-create-post.component';
import { SocialAddToYourFeedComponent } from '../feature/falcon/dasboard/social-add-to-your-feed/social-add-to-your-feed.component';
import { YouMayInterestedComponent } from '../feature/falcon/dasboard/social/you-may-interested/you-may-interested.component';
import { SocialRowanAtkinsonComponent } from '../feature/falcon/dasboard/social-rowan-atkinson/social-rowan-atkinson.component';
import { SaasCustomersComponent } from '../feature/falcon/dasboard/saas-customers/saas-customers.component';
import { SaasTodayComponent } from '../feature/falcon/dasboard/saas-today/saas-today.component';
import { UsuariosActivosComponent } from '../feature/falcon/usuarios-activos/usuarios-activos.component';
import { AllordenComponent } from '../feature/falcon/allorden/allorden.component';
import { RevenuesComponent } from '../feature/falcon/revenues/revenues.component';
import { FormsComponent } from '../feature/falcon/forms/forms.component';
import{StarterComponent} from '../feature/falcon/starter/starter.component';
import {StarterDocumentacionComponent} from '../feature/falcon/starter-documentacion/starter-documentacion.component'

const routes: Routes = [
  {path: '', component: MainComponent,
    children: [
      {path: '', component:DashboardComponent},
      {path: 'helpdesk-main-menu', component: Me01Component},
      {path: 'helpdesk-chat-menu', component: Me02Component},
      {path: 'chatlink', component: ChatActivoComponent},
      {path: 'falcon-dashboard-default-usingStorage', component: FalconUsingStorageComponent},
      {path: 'falcon-dashboard-crm-forecast', component: FalconDasboardCrmForecastComponent},
      {path: 'falcon-dashboard-analytics-campaigns', component: FalconDashboardCampaignsComponent},
      {path: 'Distributivo-Calendario2', component: DistributivoCalendario2Component},
      {path: 'Helpdesk-sidebar-chart', component: SidebarChartComponent},

      {path: 'falcon-dasboard-Management-Team-progress', component: ManagementTeamProgressComponent},
      {path: 'falcon-dasboard-E-commerce-Good-Afternoon', component: ECommerceGoodAfternonComponent },

      {path: 'distibutivo-calendario', component: DistributivoCalendarioComponent},
      {path:'distributivo-cursos', component: DistributivoCursosComponent},
      {path: 'chatlink', component: ChatActivoComponent},
      {path: 'distributivo-login', component: DistributivoLoginComponent},
      {path: 'sidebar-chat', component: SidebarChatComponent},
      {path: 'helpdesk-sidebar-config', component: SidebarConfigComponent},
      {path: 'falcon-dashboard-crm-recentLeads', component:FalconDashboardRecentComponent},
      {path: 'falcon-dashboard-analytic-SessionByBrowser', component:FalconDashboardSessionByBrowserComponent},
      {path: 'falcon-dashboard-default-marketShare', component:FalconDashboardMarketShareComponent},
      {path: 'falcon-dashboard-default-running', component: FalconDashboardRunningComponent},
      {path: 'falcon-dashboard-analytics-intelligence', component:IntelligenceComponent},
      {path: 'falcon-dashboard-default-products', component:ProductsComponent},
      {path: 'falcon-dashboard-crm-storage', component:StorageComponent},
      {path: 'falcon-dashboard-management-statistics', component:StatisticsComponent},
      {path: 'falcon-dashboard-ecommerce-orders', component:OrdersComponent},
      {path: 'falcon-dashboard-default-bandwidth', component: FalconDashboardBandwidthComponent},
      {path: 'helpdesk-home-historico', component: HelpdeskHomeHistoricoComponent},
      {path: 'vol-chat', component: VolumenChatFiltroFechaComponent},
      {path: 'helpdesk-widget', component: HelpdeskWidgetComponent},
      {path: 'falcon-usserOnline', component:UsersOnlineComponent},
      {path: 'falconCRM-revenue', component:RevenueComponent},
      {path: 'falcon-dashboard-default-totalorder', component:TotalOrderComponent},
      {path: 'falcon-dashboard-default-to-do-list', component: FalconDashboardToDoListComponent},
      {path: 'chat-volumen', component: HelpdeskChatVolumeComponent},
      {path: 'distibutivo-calendario2', component: DistributivoCalendario2Component},
      {path: 'falcon-CRM-average-call-duration', component:AverageCallDurationComponent},
      {path: 'falcon-dashboard-default-shared_files', component: SharedFilesComponent},
      {path: 'falcon-dashboard-e-commerce-best-selling-products', component: FalconECommerceBestProductsComponent},
      {path: 'falcon-dashboard-management-new-schedule', component: FalconManagementNewScheduleComponent},
      {path: 'falcon-What-are-my-top-pages-today', component: TopPagesTodayComponent},
      {path: 'falcon-active-users', component:ActiveUsersComponent},
      {path: 'falcon-dashboard-e-commerce-best-selling-products', component: FalconECommerceBestProductsComponent},
      {path: 'falcon-dashboard-e-commerce-best-selling-products', component: FalconECommerceBestProductsComponent},
      {path: 'Helpdesk-siderchart', component: SidebarChartComponent},
      {path: 'falcon-dashboard-CRM-NewContact', component: FalconDashboardCRMNewContactComponent},
      {path: 'falcon-dashboard-management-falcondiscussion', component:FalconDashboardManagementFalcondiscussionComponent},

      {path: 'falcon-dashboard-analytics-connect', component: FalconDashboardAnalyticsConnectComponent  },
      {path: 'falcon-management-members-activity', component: MembersActivityComponent},
      {path: 'falcon-ecommerce-customer-rate', component: ReturningCustomerRateComponent},
      {path: 'falcon-lead-conversion', component: LeadConversionComponent},
      {path: 'Helpdesk-siderchart', component: SidebarChartComponent},
      {path: 'falcon-running-projects', component: RunningProjectsComponent},
      {path: 'falcon-dashboard-crm-MostLeads', component:FalconDashboardMostLeadsComponent},
      {path: 'Falcon-dashboard-crm-weclometo', component: CrmWelcomeToComponent},
      {path: 'falcon-closevsgoal', component:FalconClosevsgoalComponent},
      {path: 'falcon-users', component:FalconUsersComponent},
      {path: 'falcon-totalsales', component: FalconTotalsalesComponent},
      {path: 'Falcon-Analytics-Completed', component: FalconAnalyticsCompletedComponent},
      {path: 'falcon-running', component: FalconRunningComponent},
      {path: 'member-info', component: MemberInfoComponent},
      {path: 'E-commerce-Recent-Purchases', component: ECommerceRecentPurchasesComponent},
      {path: 'Helpdesk-Chats', component: HelpdeskChatsComponent},
      {path: 'falcon-Management-Orders', component: FalconManagementOrdersComponent},
      {path: 'Helpdesk-Chats', component: HelpdeskChatsComponent},
      {path: 'helpdesk-mensajeria-filtro', component: MensajeriaFiltroComponent},
      {path: 'falcon-dashboard-e-comerce-market-share', component: FalconDashboardMarketShareComponent},
      {path: 'falcon-dashboard-analytics-connect', component: FalconDashboardAnalyticsConnectComponent},
      {path: 'falcon-dashboard-default-WeeklySales', component: WeeklySalesComponent},
      {path: 'falcon-dashboard-analytics-trafficSource', component:FalconDashboardTrafficSourceComponent},
      {path: 'falcon-dashboard-management-TO_DO_LIST', component:FalconDashboardManagementTODOLISTComponent},
      {path: 'falcon-dashboard-management-WELCOME_TOFALCON', component:FalconDashboardManagementWELCOMETOFALCONComponent},
      {path: 'falcon-dashboard-default-TOP_PRODUCTS', component:FalconDashboardDefaultTOPPRODUCTSComponent},
      {path: 'falcon-e-commerce-pos-location', component:ECommerceSalesByPosLocationComponent},
      {path: 'falcon-events-events-details-date-and-time', component: DateAndTimeComponent},
      {path: 'falcon-events-events-list', component: EventListComponent},
      {path: 'falcon-events-events-details-events-you-may-like', component: EventsMayYouLikeComponent},
      {path: 'falcon-events-events-details-FREE-New-Year', component: FREENewYearsComponent},
      {path: 'falcon-events-events-details-New-Year', component: NewYearEveComponent},
      {path: 'falcon-app-event-CreateEvent', component:FalconAppEventCreateEventComponent},
      {path: 'falcon-e-commerce-Product_Gird_Product_Details', component: FalconECommerceProductGirdProductDetailsComponent},
      {path: 'falcon-e-commerce-wekly-Sales', component: FalconECommerceWeklySalesComponent},
      {path: 'falcon-app-event-eventDetails', component: FalconAppEventEventDetailsComponent},

      {path: 'falcon-Calendar', component: CalendarComponent},
      {path: 'falcon-e-commerce-wekly-Sales', component: FalconECommerceWeklySalesComponent},
      {path: 'falcon-dashboard-default-weklySales', component: FalconDashboardDefaultWeklySalesComponent},
      {path: 'falcon-e-commerce-product-grid-detais', component: FalconECommerceProductGridDetaisComponent},
      {path: 'falcon-app-event-TicketPrice', component: FalconAppEventTicketPriceComponent},

      {path: 'falcon-app-Schedule', component: FalconAppScheduleComponent},


      {path: 'falcon-dashboard-saas-TRANSACTION_SUMMARY', component:FalconDashboardSaasTRANSACTIONSUMMARYComponent},
      {path: 'falcon-dashboard-saas-SHARED_FILES', component:FalconDashboardSaasSHAREDFILESComponent },
      {path: 'falcon-dashboard-saas-grossRevenue', component:FalconDashboardSaasGrossRevenueComponent},
      {path: 'falcon-APP-eemail-eemail-detail', component: FalconAPPEemailEemailDetailComponent},
      {path: 'falcon-e-commerce-Total-Sales', component:ECommerceTotalSalesComponent},
      {path: 'Falcon-dashboard-Social-create-post', component: SocialCreatePostComponent},
      {path: 'Falcon-dashboard-Social-Add-to-your-feed', component: SocialAddToYourFeedComponent},
      {path: 'Falcon-dashboard-Social-You-may-interested', component: YouMayInterestedComponent},
      {path: 'Falcon-dashboard-Social-rowan-atkinson', component: SocialRowanAtkinsonComponent},
      {path: 'falcon-saas-customers', component: SaasCustomersComponent},
      {path: 'falcon-saas-today', component: SaasTodayComponent},
      {path: 'usuarios-activos', component: UsuariosActivosComponent},
      {path:'allorden', component: AllordenComponent},
      {path:'revenues', component: RevenuesComponent},
      {path:'forms', component: FormsComponent},
      {path: 'falcon-starter', component:StarterComponent},
      {path: 'falcon-starter-documentacion', component:StarterDocumentacionComponent},
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
