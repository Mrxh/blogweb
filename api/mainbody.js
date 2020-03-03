import { http } from '@/plugins/axios'
const api = {
  RecomLink: '/recomList',
  ArtList: '/articleList',
  RecommendArticleList: '/RecommendArticleList',
  OrderArticleList: '/OrderArticleList',
  labelsList: '/labelsList',
  IndexArticleList: '/IndexArticleList',
  ArticleDetail: '/ArticleDetail',
  LabelsArticle: 'LabelsArticle'
}

export const ArtList = async (data) => {
  const ret = await http.post(api.ArtList, data)
  return ret
}

export const RecommendList = async () => {
  const ret = await http.get(api.RecomLink)
  return ret
}

export const RecommendArticleList = async () => {
  const ret = await http.get(api.RecommendArticleList)
  return ret
}

export const OrderArticleList = async () => {
  const ret = await http.get(api.OrderArticleList)
  return ret
}

export const labelsList = async () => {
  const ret = await http.get(api.labelsList)
  return ret
}

export const IndexArticleList = async (data) => {
  const ret = await http.post(api.IndexArticleList, data)
  return ret
}

export const ArticleDetail = async (aid) => {
  const ret = await http.get(api.ArticleDetail + '/' + aid)
  return ret
}

export const LabelsArticle = async (data) => {
  const ret = await http.post(api.LabelsArticle, data)
  return ret
}
